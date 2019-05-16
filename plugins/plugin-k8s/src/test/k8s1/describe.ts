/*
 * Copyright 2019 IBM Corporation
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
import { cli, expectYAMLSubset, expectSubset, selectors, sidecar } from '@kui-shell/core/tests/lib/ui'
import { defaultModeForGet, createNS, allocateNS, deleteNS } from '@kui-shell/plugin-k8s/tests/lib/k8s/utils'

const synonyms = ['kubectl']

describe('electron describe', function (this: common.ISuite) {
  before(common.before(this))
  after(common.after(this))

  synonyms.forEach(kubectl => {
    const ns: string = createNS()

    /** return the editor text */
    const getText = (ctx: common.ISuite) => {
      return ctx.app.client.execute(() => {
        return document.querySelector('.monaco-editor-wrapper')['editor'].getValue()
      }).then(res => res.value)
    }

    /**
     * Interact with the Raw tab
     *
     */
    const testRawTab = async (ctx: common.ISuite) => {
      await ctx.app.client.click(selectors.SIDECAR_MODE_BUTTON('raw'))

      return ctx.app.client.waitUntil(async () => {
        const ok: boolean = await getText(ctx)
          .then(expectYAMLSubset({
            apiVersion: 'v1',
            kind: 'Pod',
            metadata: {
              name: 'nginx',
              namespace: ns
            }
          }, false))

        return ok
      })
    }

    /**
     * Interact with the Summary tab
     *
     */
    const testSummaryTab = async (ctx: common.ISuite) => {
      await ctx.app.client.click(selectors.SIDECAR_MODE_BUTTON(defaultModeForGet))

      // expect to see some familiar bits of a pod in the editor under the raw tab
      return ctx.app.client.waitUntil(async () => {
        const ok: boolean = await getText(ctx)
          .then(expectYAMLSubset({
            Status: 'Running',
            Labels: {
              name: 'nginx'
            }
          }, false))

        return ok
      })
    }

    allocateNS(this, ns)

    it(`should fail with 404 for unknown resource type via ${kubectl}`, () => {
      const fakeType = 'yoyoyo1334u890724'
      return cli.do(`${kubectl} describe ${fakeType} productPage`, this.app)
        .then(cli.expectError(404))
    })

    it(`should create sample pod from URL via ${kubectl}`, () => {
      return cli.do(`${kubectl} create -f https://raw.githubusercontent.com/kubernetes/examples/master/staging/pod -n ${ns}`, this.app)
        .then(cli.expectOKWithCustom({ selector: selectors.BY_NAME('nginx') }))
        .then(selector => this.app.client.waitForExist(`${selector} badge.green-background`))
        .catch(common.oops(this))
    })

    it(`should describe that pod via ${kubectl}`, () => {
      return cli.do(`${kubectl} describe pod nginx -n ${ns}`, this.app)
        .then(cli.expectJustOK)
        .then(sidecar.expectOpen)
        .then(sidecar.expectMode(defaultModeForGet))
        .then(sidecar.expectShowing('nginx', undefined, undefined, ns))
        .catch(common.oops(this))
    })

    it(`should flip around on describe tabs via ${kubectl}`, async () => {
      try {
        // flip back and forth a few times
        await testRawTab(this)
        await testSummaryTab(this)
        await testRawTab(this)
        await testSummaryTab(this)
      } catch (err) {
        common.oops(this)(err)
      }
    })

    deleteNS(this, ns)
  })
})
