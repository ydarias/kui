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

import { inBrowser } from '@kui-shell/core/core/capabilities'
import { injectCSS } from '@kui-shell/core/webapp/util/inject'

import { dirname, join } from 'path'

export default () => {
  if (inBrowser()) {
    injectCSS({ css: require('@kui-shell/plugin-wskflow/web/css/wskflow.css').toString(), key: 'wskflow' })
  } else {
    const ourRoot = dirname(require.resolve('@kui-shell/plugin-wskflow/package.json'))
    injectCSS(join(ourRoot, 'web/css/wskflow.css'))
  }
}
