/*
 * Copyright 2018-19 IBM Corporation
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
const debug = Debug('plugins/bash-like/cmds/git-diff')

import * as path from 'path'

import { split } from '@kui-shell/core/core/repl'
import { isPopup } from '@kui-shell/core/webapp/cli'
import Presentation from '@kui-shell/core/webapp/views/presentation'
import { CommandRegistrar, IEvaluatorArgs } from '@kui-shell/core/models/command'

import { handleNonZeroExitCode } from '../util/exec'
import { asSidecarEntity } from '../util/sidecar-support'
import { onbranch, injectCSS } from '../util/git-support'

const doDiff = async ({ command, execOptions }: IEvaluatorArgs) => new Promise(async (resolve, reject) => {
  const injector = injectCSS()

  // purposefully imported lazily, so that we don't spoil browser mode (where shell is not available)
  const shell = await import('shelljs')

  // prefetch the current branch
  const currentBranch = onbranch()

  // spawn the git diff
  const proc = shell.exec(command, {
    async: true,
    silent: true
  })

  let rawOut = ''
  let rawErr = ''
  proc.stdout.on('data', data => {
    rawOut += data.toString()
  })
  proc.stderr.on('data', data => {
    rawErr += data.toString()
  })
  proc.on('close', async exitCode => {
    if (exitCode === 0) {
      if (rawOut.trim().length === 0) {
        debug('nothing to show')
        resolve(true)
      }

      debug('rendering git diff as HTML')

      // show a summary of changed files the top?
      const diffMatch = rawOut.match(/^diff\s+/mg)
      const showFiles = diffMatch && diffMatch.length >= 2
      debug('diffMatch', diffMatch)

      const argv = split(command)
      const commandPart = argv[1]
      const filePart = argv.slice(2).join(' ') || 'All changes'

      // loaded lazily to help with the size of the headless dist
      const { Diff2Html } = await import('diff2html')

      // note: no sidecar header if this launched from the command line ("subwindow mode")
      resolve(asSidecarEntity(filePart, Diff2Html.getPrettyHtml(rawOut, {
        showFiles,
        matching: 'lines'
        // outputFormat: 'side-by-side',
      }), {
        presentation: isPopup() ? Presentation.FixedSize : Presentation.Default
      }, undefined, commandPart, currentBranch))
    } else {
      try {
        resolve(handleNonZeroExitCode(command, exitCode, rawOut, rawErr, execOptions))
      } catch (err) {
        reject(err)
      }
    }
  })
})

/**
 * Register command handlers
 *
 */
export default (commandTree: CommandRegistrar) => {
  commandTree.listen('/git/diff', doDiff, { needsUI: true, requiresLocal: true, noAuthOk: true })
}
