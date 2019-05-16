/*
 * Copyright 2017-18 IBM Corporation
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
const debug = Debug('plugins/editor/open')

import * as path from 'path'
import * as events from 'events'

import globalEventBus from '@kui-shell/core/core/events'
import { inBrowser } from '@kui-shell/core/core/capabilities'
import { removeAllDomChildren } from '@kui-shell/core/webapp/util/dom'
import { injectCSS, uninjectCSS, injectScript } from '@kui-shell/core/webapp/util/inject'
import { currentSelection, getSidecar, isVisible as isSidecarVisible, addSidecarHeaderIconText, addNameToSidecarHeader, addVersionBadge } from '@kui-shell/core/webapp/views/sidecar'

import strings from '../i18n/strings'
import { extension, language } from './file-types'

/**
 * Open the code editor
 *
 * @return a function that can be passed an entity to display in the
 * editor, and which returns { getEntity, editor, content }
 *     - getEntity(): returns the entity model
 *     - editor: an instance of the monaco editor class
 *     - content: a dom that contains the instance; this must be attached somewhere!
 *
 */
export const openEditor = async (name, options, execOptions) => {
  debug('openEditor')

  const sidecar = getSidecar()

  /** returns the current entity */
  const custom = execOptions.custom
  const getEntity = (custom && custom.getEntity) || currentSelection

  // for certain content types, always show folding controls, rather
  // than on mouse over (which is the default behavior for monaco)
  const entityRightNow = getEntity()
  const kind = entityRightNow && ((entityRightNow.exec && entityRightNow.exec.kind) || entityRightNow.contentType)
  if (kind === 'yaml' || kind === 'json') {
    options.showFoldingControls = 'always'
  }

  if (!pre2) {
    if (!inBrowser()) {
      const monacoRoot = path.dirname(require.resolve('monaco-editor/package.json'))
      injectScript(path.join(monacoRoot, 'min/vs/loader.js'))
    }

    try {
      injectCSS({ css: require('@kui-shell/plugin-editor/web/css/editor.css').toString(), key: 'editor.editor' })
    } catch (err) {
      const ourRoot = path.dirname(require.resolve('@kui-shell/plugin-editor/package.json'))
      injectCSS(path.join(ourRoot, 'web/css/editor.css'))
    }
    pre2 = true
  }

  const content = document.createElement('div')
  const editorWrapper = document.createElement('div')

  editorWrapper.className = 'monaco-editor-wrapper'
  content.appendChild(editorWrapper)

  // we want the editor to have focus, so the user can start coding
  // (but don't bother if we are in readOnly mode)
  if (!options.readOnly) {
    editorWrapper.focus()
  }

  const theme = getComputedStyle(document.body)
  editorWrapper['baseFontSize'] = parseInt(theme.getPropertyValue('font-size').replace(/px$/, ''), 10) * 0.875

  // override the repl's capturing of the focus
  content.onclick = evt => {
    evt.stopPropagation()
  }

  injectTheme(editorWrapper) // inject right now
  globalEventBus.on('/theme/change', () => injectTheme(editorWrapper, true)) // and re-inject when the theme changes

  /**
   * Given an editor instance, return a function that can update
   * that instance to show a given entity.
   *
   */
  const updater = editor => {
    editor.updateText = entity => {
      // monaco let's us replace the full range of text, so we don't need
      // an explicit delete of the current text
      return setText(editor, options)(entity.exec)
    }

    editor.clearDecorations = () => {
      // debug('clearing decorations', editor.__cloudshell_decorations)
      const none = [{ range: new global['monaco'].Range(1, 1, 1, 1), options: { } }]
      editor.__cloudshell_decorations = editor.deltaDecorations(editor.__cloudshell_decorations || [], none)
    }

    editorWrapper['editor'] = editor

    return entity => {
      debug('updater', typeof entity === 'string' ? entity.substring(0, 20) : entity)
      const eventBus = new events.EventEmitter()

      const kind = sidecar.querySelector('.action-content .kind') as HTMLElement
      kind.innerText = ''

      // update the editor text
      setText(editor, options, execOptions)(entity.exec)

      content.classList.add('code-highlighting')

      addSidecarHeaderIconText(entity.prettyType || entity.type, sidecar)

      // stash this so that the implicit entity model works
      sidecar.entity = entity

      // isModified display
      const subtext = sidecar.querySelector('.sidecar-header-secondary-content .custom-header-content')
      const status = document.createElement('div')
      const isNew = document.createElement('div')
      const isNewReadOnly = document.createElement('div')
      const upToDate = document.createElement('div')
      const modified = document.createElement('div')

      if (!execOptions.noSidecarHeader) {
        removeAllDomChildren(subtext)
        subtext.appendChild(status)
      }
      status.appendChild(isNew)
      status.appendChild(isNewReadOnly)
      status.appendChild(upToDate)
      status.appendChild(modified)
      isNew.innerHTML = strings.isNew
      isNewReadOnly.innerHTML = strings.isNewReadOnly
      upToDate.innerHTML = strings.isUpToDate
      modified.innerHTML = strings.isModified
      status.className = 'editor-status'

      if (options.readOnly) {
        debug('status:is-read-only')
        status.classList.add('is-read-only')
      }
      if (entity.isNew) {
        debug('status:is-new')
        status.classList.add('is-new')
      } else {
        debug('status:is-up-to-date')
        status.classList.add('is-up-to-date')
      }
      isNew.className = 'is-new'
      isNewReadOnly.className = 'is-new-read-only'
      upToDate.className = 'is-up-to-date'
      modified.className = 'is-modified'

      /** update isdecar header */
      const updateHeader = () => {
        if (!execOptions.noSidecarHeader) {
          debug('updateHeader', entity)

          // make a wrapper around the entity name to house the "is
          // modified" indicator
          const nameDiv = document.createElement('div')
          const namePart = document.createElement('span')
          const isModifiedPart = document.createElement('span')
          const isModifiedIcon = document.createElement('i')

          nameDiv.appendChild(namePart)
          nameDiv.appendChild(isModifiedPart)
          isModifiedPart.appendChild(isModifiedIcon)
          namePart.innerText = entity.name
          nameDiv.className = 'is-modified-wrapper'
          isModifiedPart.className = 'is-modified-indicator'
          isModifiedIcon.className = 'fas fa-asterisk'
          isModifiedPart.setAttribute('data-balloon', strings.isModifiedIndicator)
          isModifiedPart.setAttribute('data-balloon-pos', 'left')

          addNameToSidecarHeader(sidecar, nameDiv, entity.packageName, undefined, entity.prettyKind || entity.kind || entity.prettyType || entity.viewName || entity.type)
          addVersionBadge(entity, { clear: true })
        }
      }

      /** even handlers for saved and content-changed */
      const editsInProgress = () => {
        // debug('editsInProgress')
        sidecar.classList.add('is-modified')
        editor.clearDecorations() // for now, don't try to be clever; remove decorations on any edit
        eventBus.emit('/editor/change', {})
      }
      const editsCommitted = entity => {
        debug('editsCommited', entity)
        const lockIcon = sidecar.querySelector('[data-mode="lock"]')

        sidecar.classList.remove('is-modified')
        status.classList.remove('is-new')
        if (lockIcon) lockIcon.classList.remove('is-new')
        sidecar.entity = entity
        debug('status:is-up-to-date')

        // update sidecar header, after save or revert
        updateHeader()
      }
      eventBus.on('/editor/save', editsCommitted)
      editor.getModel().onDidChangeContent(editsInProgress)

      // update sidecar header, initial call
      updateHeader()

      /** call editor.layout */
      const relayout = editor.relayout = () => {
        const go = () => {
          const { width, height } = editorWrapper.getBoundingClientRect()
          debug('relayout', width, height)
          editor.layout({ width, height })
        }

        editor.updateOptions({ automaticLayout: false })
        go()
      }

      globalEventBus.on('/sidecar/maximize', relayout)
      window.addEventListener('resize', relayout)

      if (isSidecarVisible()) {
        relayout()
        setTimeout(relayout, 600) // race with sidecar sweeping in
      } else {
        setTimeout(relayout, 600)
      }

      return Promise.resolve({ getEntity, editor, content, eventBus })
    }
  } /* end of updater */

  let initEditor
  if (inBrowser()) {
    initEditor = (await import('./init/esm')).default
  } else {
    initEditor = (await import('./init/amd')).default
  }

  // once the editor is ready, return a function that can populate it
  return initEditor(editorWrapper, options).then(updater)
} /* end of openEditor */

/**
 * Update the code in the editor to use the given text
 *
 */
const setText = (editor, options, execOptions?) => ({ code, kind }) => {
  // options is --language yaml command line
  // execOptions is side channel progmmatic information passed via repl.exec
  const lang = (options && options.language) || (execOptions && execOptions.language) || language(kind)
  debug('setText language', kind, lang)
  debug('setText code', code.substring(0, 20))

  const oldModel = editor.getModel()
  const newModel = global['monaco'].editor.createModel(code, lang)

  editor.setModel(newModel)

  if (!execOptions || !execOptions.cursorPosition || execOptions.cursorPosition === 'end') {
    editor.setPosition(editor.getModel().getPositionAt((code && code.length) || 0))
  }

  if (oldModel) {
    oldModel.dispose()
  }

  // see https://github.com/Microsoft/monaco-editor/issues/194 we need
  // to re-grab focus after a model update; but don't bother if we are
  // in readOnly mode
  //  if (!options.readOnly) {
  // setTimeout(() => editor.focus(), 500)
  //  }

  return code
}

let pre = false
let pre2 = false
export const preload = () => {
  injectTheme()
  pre = true
}

/**
 * Inject the current theme into the editor
 *
 * @param editorWrapper null allows for pre-injecting of CSS (performance optimization)
 */
const injectTheme = (editorWrapper?: Element, force = false) => {
  if (pre && !force) {
    return
  }

  const isDark = document.querySelector('body').getAttribute('kui-theme-style') === 'dark'
  const currentTheme = document.querySelector('body').getAttribute('kui-theme')

  const previousKey = editorWrapper && editorWrapper.getAttribute('kui-theme-key')
  const key = `editor.theme-${currentTheme}`
  if (editorWrapper) editorWrapper.setAttribute('kui-theme-key', key)

  // dangit: in webpack we can require the CSS; but in plain nodejs,
  // we cannot, so have to use filesystem operations to acquire the
  // CSS content
  try {
    // try webpack style
    if (isDark) {
      injectCSS({ css: require('@kui-shell/plugin-editor/web/css/dark.css').toString(), key })
    } else {
      injectCSS({ css: require('@kui-shell/plugin-editor/web/css/mono-blue.css').toString(), key })
    }
  } catch (err) {
    // oh well, try filesystem style
    const ourRoot = path.dirname(require.resolve('@kui-shell/plugin-editor/package.json'))
    if (isDark) {
      injectCSS({ key, path: path.join(ourRoot, 'web/css/dark.css') })
    } else {
      injectCSS({ key, path: path.join(ourRoot, 'web/css/mono-blue.css') })
    }
  }

  // remove previous theme; for some reason, if we don't do this as an
  // async, chrome flashes as we change themes!
  if (editorWrapper) {
    setTimeout(() => uninjectCSS({ key: previousKey }), 0)
    pre = false
  }
}
