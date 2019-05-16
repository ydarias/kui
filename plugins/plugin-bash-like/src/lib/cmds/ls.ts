/*
 * Copyright 2018 IBM Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as Debug from 'debug'
const debug = Debug('plugins/bash-like/cmds/ls')

import { lstat, readdir, stat } from 'fs'
import { isAbsolute, join } from 'path'

import * as expandHomeDir from 'expand-home-dir'

import * as repl from '@kui-shell/core/core/repl'
import UsageError from '@kui-shell/core/core/usage-error'
import { CommandRegistrar, IEvaluatorArgs, ParsedOptions } from '@kui-shell/core/models/command'
import { Row, Table, TableStyle } from '@kui-shell/core/webapp/models/table'
import { findFile, isSpecialDirectory } from '@kui-shell/core/core/find-file'

import { doExec } from './bash-like'
import { localFilepath } from '../util/usage-helpers'

/** flatten an array of arrays */
function flatten<T> (arrays: T[][]): T[] {
  return [].concat.apply([], arrays)
}

/**
 * From the end of the given string, scan for the idx that marks the
 * start of some filename in the given fileMap
 *
 */
const scanForFilename = (str: string, fileMap: Record<string, boolean>, endIdx = str.length - 1) => {
  let candidate
  let candidateIdx

  for (let idx = endIdx; idx >= 0; idx--) {
    const maybe = str.slice(idx, endIdx + 1)
    if (fileMap[maybe]) {
      // find the longest candidate
      if (!candidate || candidate.length < maybe.length) {
        candidate = maybe
        candidateIdx = idx - 1
      }
    }
  }

  if (candidate) {
    fileMap[candidate] = false // we already matched this!
    return candidateIdx
  }
}

/**
 * Return the contents of the given directory
 *
 */
const myreaddir = (dir: string): Promise<Array<string>> => new Promise((resolve, reject) => {
  debug('readdir', dir)

  lstat(dir, (err, stats) => {
    if (err) {
      reject(err)
    } else if (!stats.isDirectory()) {
      // link or file or other
      resolve([dir])
    } else {
      readdir(dir, (err, files) => {
        if (err) {
          reject(err)
        } else {
          resolve(['.', '..'].concat(files))
        }
      })
    }
  })
})

/**
 * If the given filepath is a directory, then ls it, otherwise cat it
 *
 */
const lsOrOpen = (filepath: string) => new Promise((resolve, reject) => {
  const fullpath = findFile(expandHomeDir(filepath))
  const filepathForRepl = repl.encodeComponent(filepath)

  // note: stat not lstat, because we want to follow the link
  stat(fullpath, (err, stats) => {
    if (err) {
      reject(err)
    } else if (stats.isDirectory()) {
      resolve(repl.pexec(`ls ${filepathForRepl}`))
    } else if (fullpath.match(/\.sh$/)) {
      resolve(repl.pexec(`run ${filepathForRepl}`))
    } else {
      resolve(repl.pexec(`open ${filepathForRepl}`))
    }
  })
})

/**
 * Turn ls output into a REPL table
 *
 */
const tabularize = (cmd: string, parsedOptions: ParsedOptions, parent = '', parentAsGiven = '') => async (output: string): Promise< true | Table> => {
  debug('tabularize', parent, parentAsGiven)

  if (output.length === 0) {
    return true
  }

  const files = await myreaddir((parent || process.cwd()).replace(/['"]/g, ''))
  const fileMap = files.reduce((M, file) => {
    M[file] = true
    M[join(parent, file)] = true
    return M
  }, {})

  // ls -l on directories has a line at the top "total nnnn"
  // we will strip this off
  const startIdx = output.match(/^total [\d]+/) ? 1 : 0

  const columnGap = process.platform === 'darwin' ? 15 : 1

  const rows = output
    .split(/[\n\r]/)
    .slice(startIdx) // maybe strip off "total nnn"
    .map(line => line
         .split(new RegExp(`[\\s]{${columnGap}}`))
         .map(col => col.trim())
         .filter(x => x)
         .map((col, idx, A) => {
           if (idx === 1) {
             // the "num links" and "user" columns are adjoined
             // e.g. "1 nickm"
             const spaceIdx = col.indexOf(' ')
             return [
               col.substring(0, spaceIdx),
               col.substring(spaceIdx + 1)
             ].filter(x => x) // the first entry might be blank, e.g. on linux
           } else if (process.platform !== 'darwin' && idx >= 5 && idx <= 7) {
             // the date column is split across three cols in our split
             if (idx === 5) {
               return `${A[idx]} ${A[idx + 1]} ${A[idx + 2]}`
             }
           } else if (process.platform === 'darwin' && idx === 3) {
             // the size, date, and filename columns are adjoined
             // e.g. "12K Jul 26 12:58 CHANGELOG.md"

             const spaceIdx1 = col.indexOf(' ') // space after 12k

             const stats = A[0]
             const isLink = stats.charAt(0) === 'l'

             if (isLink) {
               // links are a bit funky, e.g.
               // "115B Sep  4 21:04 yo.js -> /path/to/yo.js"
               const arrow = '->'
               const arrowIdx = col.lastIndexOf(arrow)
               const endOfLinkIdx = arrowIdx - arrow.length + 1
               const startOfFilename = scanForFilename(col, fileMap, endOfLinkIdx - 1)

               return [
                 col.substring(0, spaceIdx1), // size
                 col.substring(spaceIdx1 + 1, startOfFilename), // date
                 col.substring(startOfFilename + 1, endOfLinkIdx) // link name
               ]
             } else {
               const startOfFilename = scanForFilename(col, fileMap) // e.g. space after :58 in the comment under idx === 3

               return [
                 col.substring(0, spaceIdx1), // size
                 col.substring(spaceIdx1 + 1, startOfFilename), // date
                 col.substring(startOfFilename + 1) // filename
               ]
             }
           } else if (process.platform !== 'darwin' && idx >= 8) {
             // here is where we handle the name column(s) on
             // non-darwin platforms; these usually span 3-N columns,
             // depending on how many spaces the base filename and
             // linked filename contain
             if (idx === 8) {
               // idx 8 marks the start of the name -> link columns
               const stats = A[0]
               const isLink = stats.charAt(0) === 'l'
               const rest = A.slice(idx).join(' ')

               if (isLink) {
                 // if this row represents a link, the format will be name -> linkedFile
                 // we want the "name" part
                 const arrow = '->'
                 const arrowIdx = rest.lastIndexOf(arrow)
                 return rest.slice(0, arrowIdx).trim()
               } else {
                 // otherwise, this isn't a link, so peel off the remaining columns
                 return rest
               }
             }
           } else {
             return col
           }
         }))
    .map(flatten)
    .map(row => row.filter(x => x))
    .filter(x => x.length > 0)
    .filter(row => !row[row.length - 1].match(/~$/)) // hack for now: remove emacs ~ temporary files
  debug('rows', rows)

  const outerCSS = 'header-cell'
  const outerCSSSecondary = `${outerCSS} hide-with-sidecar`

  const headerAttributes = [
    { key: 'owner', value: 'OWNER', outerCSS: outerCSSSecondary },
    { key: 'group', value: 'GROUP', outerCSS: outerCSSSecondary },
    { key: 'size', value: 'SIZE', outerCSS: outerCSSSecondary },
    { key: 'lastmod', value: 'LAST MODIFIED', outerCSS: `${outerCSS} badge-width` }
  ]

  if (parsedOptions.l) {
    headerAttributes.splice(0, 0, {
      key: 'permissions',
      value: 'PERMISSIONS',
      outerCSS: outerCSSSecondary
    })
  }

  const headerRow: Row = {
    name: 'NAME',
    type: 'file',
    onclick: false,
    outerCSS,
    attributes: headerAttributes
  }

  const body: Row[] = rows.map((columns): Row => {
    const stats = columns[0]
    const isDirectory = stats.charAt(0) === 'd'
    const isLink = stats.charAt(0) === 'l'
    const isExecutable = stats.indexOf('x') > 0
    const isSpecial = stats.charAt(0) !== '-'

    const name = columns[columns.length - 1]
    const nameForDisplay = `${name}${isDirectory ? '/' : isLink ? '@' : isExecutable ? '*' : ''}`

    const css = isDirectory ? 'dir-listing-is-directory'
      : isLink ? 'dir-listing-is-link' // note that links are also x; we choose l first
      : isExecutable ? 'dir-listing-is-executable'
      : isSpecial ? 'dir-listing-is-other-special'
      : ''

    const startTrim = 2
    const endTrim = 0
    const allTrim = startTrim + endTrim + 1

    // idx into the attributes; minus 1 because we slice off the name
    const ownerIdx = 1 - 1
    const groupIdx = 2 - 1
    const sizeIdx = 3 - 1
    const dateIdx = columns.length - allTrim - 1

    // user asked to sort by time?
    const sortByTime = parsedOptions.t

    const permissionAttribute = !parsedOptions.l ? [] : [{
      value: columns[0],
      css: 'slightly-deemphasize'
    }]

    const normalAttributes = columns.slice(startTrim, columns.length - endTrim - 1).map((col, idx) => ({
      value: col,
      outerCSS: idx !== dateIdx ? 'hide-with-sidecar' : 'badge-width',
      css: (idx === ownerIdx || idx === groupIdx || (idx === dateIdx && !sortByTime) || (idx === sizeIdx && sortByTime)) ? 'slightly-deemphasize' : ''
    }))

    return new Row({
      type: cmd,
      name: nameForDisplay,
      onclick: () => lsOrOpen(isAbsolute(name) ? name : join(parentAsGiven, name)), // note: ls -l file results in an absolute path
      css,
      attributes: permissionAttribute.concat(normalAttributes)
    })
  })

  return new Table({
    type: cmd,
    style: TableStyle.Light,
    noEntityColors: true,
    noSort: true,
    header: headerRow,
    body
  })
}

/**
 * ls command handler
 *
 */
const doLs = (cmd: string) => ({ command, execOptions, argvNoOptions: argv, parsedOptions: options }: IEvaluatorArgs): Promise<true | Table> => {
  const filepathAsGiven = argv[argv.indexOf(cmd) + 1]
  const filepath = findFile(expandHomeDir(filepathAsGiven), true, true)

  debug('doLs filepath', filepathAsGiven, filepath)

  if (filepath.match(/app.asar/) && isSpecialDirectory(filepathAsGiven)) {
    // for now, we don't support ls of @ directories
    throw new Error('File not found')
  }

  const rest = command.replace(/^\s*(l)?ls/, '')
  return doExec(`ls -lh ${rest}`, Object.assign({}, execOptions, {
    nested: true,
    raw: true,
    env: {
      LS_COLWIDTHS: '100:100:100:100:100:100:100:100'
    }
  }))
    .then(tabularize(command, options, filepath, filepathAsGiven))
}

const usage = (command: string) => ({
  strict: command,
  command,
  title: 'local file list',
  header: 'Directory listing of your local filesystem',
  noHelpAlias: true,
  optional: localFilepath.concat([
    { name: '-A', boolean: true, docs: 'List all entries except for . and ..' },
    { name: '-a', boolean: true, docs: 'Include directory entries whose names begin with a dot (.)' },
    { name: '-c', boolean: true, docs: 'Use time when file status was last changed for sorting (-t)' },
    { name: '-l', boolean: true, hidden: true },
    { name: '-h', boolean: true, hidden: true },
    { name: '-t', boolean: true, docs: 'Sort by time modified (most recently modified first)' },
    { name: '-r', boolean: true, docs: 'Reverse the natural sort order' },
    { name: '-s', boolean: true, hidden: true }, // "show size", which we always do; so hidden: true
    { name: '-S', boolean: true, docs: 'Sort files by size' }
  ])
})

/**
 * Register command handlers
 *
 */
export default (commandTree: CommandRegistrar) => {
  const ls = commandTree.listen('/ls', doLs('ls'), { usage: usage('ls'), noAuthOk: true, requiresLocal: true })
  commandTree.synonym('/lls', doLs('lls'), ls, { usage: usage('lls'), noAuthOk: true, requiresLocal: true })
}
