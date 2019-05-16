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

import * as common from '@kui-shell/core/tests/lib/common'
import { cli, selectors } from '@kui-shell/core/tests/lib/ui'

describe('k8s usage', function (this: common.ISuite) {
  before(common.before(this))
  after(common.after(this))

  it('should give help for known outer command: kubectl', () => cli.do('kubectl', this.app)
     .then(cli.expectError(500, undefined, { passthrough: true }))
     .then(N => Promise.all([
       this.app.client.waitForExist(`${selectors.OUTPUT_N(N)} h4.usage-error-title[data-title="Usage"]`),
       this.app.client.waitForExist(`${selectors.OUTPUT_N(N)} .bx--breadcrumb-item .bx--no-link[data-label="kubectl"]`)
     ]))
     .catch(common.oops(this)))

  it('should give help for known outer command: kubectl get -h', () => cli.do('kubectl get -h', this.app)
     .then(cli.expectError(500, undefined, { passthrough: true }))
     .then(N => Promise.all([
       this.app.client.waitForExist(`${selectors.OUTPUT_N(N)} h4.usage-error-title[data-title="Options:"]`),
       this.app.client.waitForExist(`${selectors.OUTPUT_N(N)} .bx--breadcrumb-item .bx--no-link[data-label="get"]`),
       this.app.client.waitForExist(`${selectors.OUTPUT_N(N)} .bx--breadcrumb-item .bx--link[data-label="kubectl"]`)
     ]))
     .catch(common.oops(this)))

  it('should give help for known outer command: kubectl logs -h', () => cli.do('kubectl logs -h', this.app)
     .then(cli.expectError(500, undefined, { passthrough: true }))
     .then(N => Promise.all([
       this.app.client.waitForExist(`${selectors.OUTPUT_N(N)} h4.usage-error-title[data-title="Options:"]`),
       this.app.client.waitForExist(`${selectors.OUTPUT_N(N)} h4.usage-error-title[data-title="Examples"]`),
       this.app.client.waitForExist(`${selectors.OUTPUT_N(N)} .bx--breadcrumb-item .bx--no-link[data-label="logs"]`),
       this.app.client.waitForExist(`${selectors.OUTPUT_N(N)} .bx--breadcrumb-item .bx--link[data-label="kubectl"]`)
     ]))
     .catch(common.oops(this)))
})
