/*
 * Copyright 2017-19 IBM Corporation
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
const debug = Debug('plugins/wskflow/init')
debug('loading')

import { CommandRegistrar } from '@kui-shell/core/models/command'

import flowCommand from './lib/flowCommand'
import preview from './lib/preview'
import visualize from './lib/visualize'

export default async (commandTree: CommandRegistrar) => {
  debug('initializing')

  await flowCommand(commandTree)
  await preview(commandTree)

  try {
    // the require of lib/visualize may fail in headless mode; that's ok!

    return {
      /**
       * Export a programmatic API to visualize a Composition
       *
       * [required] ast: composer-generated JSON. container: DOM selector
       * [optional] w & h: canvas width and height. data: activation data
       *
       */
      visualize
    }
  } catch (err) {
    console.error(err)

    return {
      visualize: () => {
        throw new Error('Unsupported operation')
      }
    }
  }
}

debug('finished loading')
