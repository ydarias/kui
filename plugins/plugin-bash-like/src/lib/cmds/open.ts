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

declare var hljs

import * as Debug from 'debug'
const debug = Debug('plugins/bash-like/cmds/open')

import { basename, dirname } from 'path'
import { readFile } from 'fs'
import * as expandHomeDir from 'expand-home-dir'

import { isHeadless } from '@kui-shell/core/core/capabilities'
import { qexec } from '@kui-shell/core/core/repl'
import { findFile } from '@kui-shell/core/core/find-file'
import { CommandRegistrar } from '@kui-shell/core/models/command'

import markdownify from '../util/markdown'
import { localFilepath } from '../util/usage-helpers'

/**
 * Decide how to display a given filepath
 *
 */
const open = async (filepath, hljs) => {
  debug('open', filepath)

  const fullpath = findFile(expandHomeDir(filepath))
  const suffix = filepath.substring(filepath.lastIndexOf('.') + 1)

  if (suffix === 'js' ||
      suffix === 'ts' ||
      suffix === 'go' ||
      suffix === 'txt' ||
      suffix === 'swift' ||
      suffix === 'py' ||
      suffix === 'json') {
    // open json and javascript files in the editor
    return qexec(`edit "${filepath}"`)
  } else if (suffix === 'yaml' || suffix === 'yml') {
    // use the k8s plugin to edit yamls
    return qexec(`kedit "${filepath}"`)
  } else if (suffix === 'png' || suffix === 'jpg' || suffix === 'jpeg' || suffix === 'tiff' ||
             suffix === 'tif' || suffix === 'gif' || suffix === 'icns' || suffix === 'ico' ||
             suffix === 'webp' || suffix === 'bpg' || suffix === 'svg' ||
             suffix === 'mov' || suffix === 'mp4' || suffix === 'ogg' || suffix === 'mp3') {
    // open binary/imag fields in a separate window
    window.open(fullpath, 'target=_blank')
    return true
  } else if (suffix === 'pkl' || suffix === 'sab') {
    throw new Error('Opening of binary files not supported')
  } else {
    return new Promise((resolve, reject) => {
      readFile(fullpath, async (err, fileContent) => {
        if (err) {
          if (err.code === 'EISDIR') {
            debug('trying to open a directory; delegating to ls')
            qexec(`ls "${filepath}"`).then(resolve, reject)
          } else {
            reject(err)
          }
        } else {
          const enclosingDirectory = dirname(filepath)

          let data: string | Element = fileContent.toString()
          let name = basename(filepath)
          let packageName = enclosingDirectory === '.' ? undefined : enclosingDirectory

          if ((suffix === 'adoc' || suffix === 'md') && !isHeadless()) {
            const { title, body } = await markdownify(suffix, data, fullpath, hljs)

            data = body

            if (title) {
              // use the first <h1> as the sidecar title
              // and use the filename as the "packageName" subtitle
              packageName = name
              name = title.innerText
            }
          }

          resolve({
            type: 'custom',
            isEntity: true,
            prettyType: 'file',
            name,
            packageName,
            contentType: suffix === 'sh' ? 'shell' : suffix,
            contentTypeProjection: 'data',
            content: {
              data
            }
          })
        }
      })
    })
  }
}

const usage = {
  strict: 'open',
  command: 'open',
  title: 'open file',
  header: 'View the contents a file',
  optional: localFilepath
}

/**
 * Register command handlers
 *
 */
export default (commandTree: CommandRegistrar) => {
  commandTree.listen('/open', ({ argvNoOptions: argv }) => {
    return open(argv[argv.indexOf('open') + 1], hljs)
  }, { usage, needsUI: true, noAuthOk: true })
}
