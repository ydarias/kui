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
const debug = Debug('k8s/controller/auth')

import { CommandRegistrar, IEvaluatorArgs } from '@kui-shell/core/models/command'

import { setAuth } from '../model/auth'

const usage = {
  add: {
    command: 'kubectl auth add',
    strict: 'kubectl auth add',
    docs: 'Add a cluster config',
    example: 'kubectl auth add'
  }
}

const add = async ({ block, nextBlock }: IEvaluatorArgs) => {
  const { prompt } = await import('@kui-shell/core/webapp/cli')
  return prompt('kubectl auth add', block as HTMLElement, nextBlock, {
    placeholder: 'Paste the contents of your kubeconfig: cat $KUBECONFIG',
    onpaste: 'capture'
  }, ({ field: kubeconfigString }) => {
    if (kubeconfigString.length === 0) {
      //
      // the user paste anything, get out of here!
      //
      return Promise.reject(new Error('Operation cancelled'))
    } else {
      //
      // here is the core logic
      //
      debug('got kubeconfig', kubeconfigString)
      try {
        const { safeLoad: parseYAML } = require('js-yaml')

        const kubeconfig = parseYAML(kubeconfigString)
        debug('kubeconfig', kubeconfig)

        if (!kubeconfig.apiVersion && kubeconfig.kind !== 'Config') {
          return Promise.reject('This does not look like a kubeconfig')
        } else if (!kubeconfig.clusters || kubeconfig.clusters.length === 0) {
          return Promise.reject('Could not find a cluster config')
        } else {
          const cafile = kubeconfig.clusters[0].cluster['certificate-authority']
          if (!cafile) {
            return Promise.reject('Could not find a certificate-authority')
          } else {
            return {
              reprompt: true,
              placeholder: `Paste the contents of your certificate-authority: cat $(dirname $KUBECONFIG})/${cafile}`,
              onpaste: 'capture',
              completion: async ({ field: ca }) => {
                debug('got ca', ca)

                /** matches a kube PEM certificate */
                const certPattern = /^\s*-----BEGIN CERTIFICATE-----[^\-]+-----END CERTIFICATE-----\s*$/

                if (!ca.match(certPattern)) {
                  return Promise.reject('This does not look like a kubernetes certificate')
                } else {
                  // all right! we now have the kubeconfig and the PEM
                  setAuth(kubeconfigString, ca, cafile)
                  return true

                  /* const repl = await import('@kui-shell/core/core/repl')
                  const { PACKAGE } = await import('../../actionProxy/deploy')
                  const { deploy: deployKubectl } = await import('../../actionProxy/kubectl')
                  return deployKubectl()
                    .then(() => repl.qexec(`package get "${PACKAGE}"`))
                    .then(({ parameters }) => repl.qexec(`package update "${PACKAGE}"`, undefined, undefined, {
                      parameters: Object.assign({}, parameters, {
                        kubeconfig: Buffer.from(kubeconfigString).toString('base64'),
                        ca: Buffer.from(ca).toString('base64'),
                        cafile
                      })
                    }))
                    .then(() => 'Successfully imported your kubeconfig and certificate') */
                }
              }
            }
          }
        }
      } catch (err) {
        return Promise.reject(err)
      }
    }
  })
}

/**
 * Register the commands
 *
 */
export default (commandTree: CommandRegistrar) => {
  commandTree.listen('/k8s/auth/add', add, { usage: usage.add, noAuthOk: [ 'openwhisk' ], inBrowserOk: true })
}
