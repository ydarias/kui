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
const debug = Debug('plugins/core-support/zoom')

import eventBus from '@kui-shell/core/core/events'
import UsageError from '@kui-shell/core/core/usage-error'
import { inBrowser } from '@kui-shell/core/core/capabilities'
import { injectCSS } from '@kui-shell/core/webapp/util/inject'
import { CommandRegistrar, IEvaluatorArgs } from '@kui-shell/core/models/command'

import * as path from 'path'

/**
 * Keyboard event character codes
 *
 */
const keys = {
  ZOOM_RESET: 48,
  ZOOM_IN: 187,
  ZOOM_OUT: 189
}

/**
 * onkeydown event listener
 *
 */
const listener = (event: KeyboardEvent): void => {
  const char = event.keyCode

  if (event.shiftKey) {
    // if the shift key include in the chord, then this does not
    // represent a zoom event
    debug('ignoring due to shift key', char)
    return
  }

  if (char === keys.ZOOM_RESET && (event.ctrlKey || event.metaKey)) {
    // zooming
    debug('reset zoom')
    event.preventDefault()
    reset()
    setTimeout(() => eventBus.emit('/zoom', 1), 100)
  } else if ((char === keys.ZOOM_IN || char === keys.ZOOM_OUT) && (event.ctrlKey || event.metaKey) && !event.shiftKey) {
    // zooming
    event.preventDefault()
    const main = document.querySelector('body > .page')
    const factor = char === keys.ZOOM_IN ? 1 : -1
    const newZoom = parseInt(main.getAttribute('data-zoom') || '1', 10) + factor
    _set(newZoom)
    setTimeout(() => eventBus.emit('/zoom', newZoom), 100)
  }
}

/**
 * Command usage model
 *
 */
const usage = {
  get: {
    command: 'get',
    strict: 'get',
    docs: 'Get the current font zoom level'
  },
  reset: {
    command: 'reset',
    strict: 'reset',
    docs: 'Reset the current font zoom level to the default'
  },
  set: {
    command: 'set',
    strict: 'set',
    docs: 'Set the current font zoom level',
    required: [{
      name: 'level',
      numeric: true,
      docs: 'A zoom level',
      allowed: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, -1, -2 ],
      defaultValue: 1
    }]
  }
}

/**
 * Command handler for zoom set
 *
 */
const set = ({ argvNoOptions }: IEvaluatorArgs) => {
  const newZoom = argvNoOptions[argvNoOptions.indexOf('set') + 1]
  return _set(newZoom)
}
const _set = newZoom => {
  const main = document.querySelector('body > .page')

  if (newZoom <= 10 && newZoom >= -2) {
    // zoom, if we are within the supported zoom extent
    main.setAttribute('data-zoom', newZoom)
    // maybe? repl.scrollIntoView()
  } else {
    throw new UsageError({ message: 'Unsupported zoom level', usage: usage.set })
  }

  const editors = document.querySelectorAll('.monaco-editor-wrapper')
  for (let idx = 0; idx < editors.length; idx++) {
    const editor = editors[idx]['editor']

    if (editor) {
      if (editor && editor.updateOptions) {
        const delta = editors[idx]['baseFontSize'] * 0.0625 * newZoom
        const newFontSize = editors[idx]['baseFontSize'] + delta
        editor.updateOptions({ fontSize: newFontSize })
      }
    }
  }

  return true
}

/**
 * Command handler for zoom reset
 *
 */
const reset = () => _set(1)

/**
 * Return the current zoom level
 *
 */
const get = () => {
  const main = document.querySelector('body > .page')
  return parseInt(main.getAttribute('data-zoom') || '1', 10)
}

/**
 * Plugin registration
 *
 */
export default (commandTree: CommandRegistrar) => {
  commandTree.listen('/zoom/get', get, { usage: usage.get })
  commandTree.listen('/zoom/set', set, { usage: usage.set })
  commandTree.listen('/zoom/reset', reset, { usage: usage.reset })

  if (typeof document === 'undefined') return

  // register as a listener for keyboard events; note that this
  // requires that this plugin be preloaded, i.e. stick it in
  // preload.json
  document.addEventListener('keydown', listener)

  //
  // inject our CSS
  //
  if (inBrowser()) {
    injectCSS({ css: require('@kui-shell/plugin-core-support/web/css/zoom.css').toString(), key: 'zoom.css' })
  } else {
    const root = path.dirname(require.resolve('@kui-shell/plugin-core-support/package.json'))
    injectCSS(path.join(root, 'web/css/zoom.css'))
  }

  const overlay = document.createElement('div')
  overlay.className = 'zoom-overlay hidden'
  document.body.appendChild(overlay)
}
