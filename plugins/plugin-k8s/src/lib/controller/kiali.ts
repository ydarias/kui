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

import * as Debug from 'debug'
const debug = Debug('k8s/controller/kiali')

import { exec } from 'child_process'
import parseDuration = require('parse-duration')

import { CommandRegistrar, IEvaluatorArgs } from '@kui-shell/core/models/command'
import { pexec, rexec as $, qexec as $$, encodeComponent } from '@kui-shell/core/core/repl'

import * as client from '../clients/kiali'
import { States, TrafficLight } from '../model/states'

/**
 * Install Kiali
 *
 */
const installKiali = async ({ parsedOptions }: IEvaluatorArgs) => {
  const tmp = '/tmp' // FIXME

  // const ns = 'default' // FIXME
  // const username = 'kiali' // FIXME
  // const passphrase = 'kiali' // FIXME
  // await $(`kubectl create secret generic kiali -n "${ns}" --from-literal=username="${username}" --from-literal=passphrase="${passphrase}"`)

  await new Promise((resolve, reject) => {
    exec('bash <(curl -L http://git.io/getLatestKialiKubernetes)', { cwd: tmp, shell: 'bash' }, (err, stdout, stderr) => {
      if (err) {
        console.error(err)
        reject(err)
      } else {
        debug(stdout)
        resolve()
      }
    })
  })
}

/**
 * Uninstall Kiali
 *
 */
const uninstallKiali = async ({ parsedOptions }: IEvaluatorArgs) => {
  return $$('kubectl delete all,secrets,sa,configmaps,deployments,ingresses,clusterroles,clusterrolebindings,virtualservices,destinationrules,customresourcedefinitions --selector=app=kiali -n istio-system')
}

/** colorize an error ratio */
const errorRatioToTextCss = (errorRatio: number): string => {
  if (errorRatio === -1) {
    return 'slightly-deemphasize'
  } else if (errorRatio === 0) {
    return ''
  } else if (errorRatio >= 2) {
    return 'red-text semi-bold'
  } else {
    return 'yellow-text semi-bold'
  }
}

/**
 * `kiali get apps` command handler
 *
 */
const getApps = async ({ parsedOptions }: IEvaluatorArgs) => {
  const pollingInterval = parsedOptions.watch ? parseDuration(parsedOptions.watch) : 10000
  const list = await client.appList(parsedOptions.namespace && new client.Namespace(parsedOptions.namespace))

  const rateInterval = parsedOptions.interval

  const headerRows: Array<any> = [{
    type: 'application',
    noSort: true,
    name: 'NAME',
    modes: client.modes('apps'),
    outerCSS: 'header-cell',
    attributes: [
      { value: 'MESHED?', outerCSS: 'header-cell text-center hide-with-sidecar' },
      { value: 'IN ERRORS', outerCSS: 'header-cell very-narrow' },
      { value: 'OUT ERRORS', outerCSS: 'header-cell very-narrow' },
      { value: 'HEALTH', outerCSS: 'header-cell text-center' },
      { value: 'ACTIONS', outerCSS: 'header-cell text-center hide-with-sidecar' }
    ]
  }]

  list.applications.sort((a, b) => a.name.localeCompare(b.name))

  return headerRows.concat(list.applications.map(app => ({
    type: 'application',
    name: app.name,
    onclick: `kubectl get svc ${encodeComponent(app.name)} -o yaml`,
    attributes: [
      {
        value: app.istioSidecar,
        outerCSS: 'text-center hide-with-sidecar',
        css: app.istioSidecar ? 'green-text' : 'red-text',
        fontawesome: app.istioSidecar ? 'fas fa-check-circle' : 'fas fa-exclamation-triangle'
      },
      {
        key: 'inboundErrorRatio',
        value: '\u2014', // emdash
        // outerCSS: 'hide-with-sidecar',
        css: TrafficLight.Gray
      },
      {
        key: 'outboundErrorRatio',
        value: '\u2014', // emdash
        // outerCSS: 'hide-with-sidecar',
        css: TrafficLight.Gray
      },
      {
        tag: 'badge',
        value: States.Pending,
        outerCSS: 'text-center',
        css: TrafficLight.Yellow,
        watch: async (iter: number) => {
          const health = await client.appHealth(app.name, new client.Namespace(list.namespace.name), rateInterval)
          const { errorRatio, inboundErrorRatio, outboundErrorRatio } = health.requests

          const { value, badgeCss } =
            errorRatio === -1 ? { value: 'Inactive', badgeCss: TrafficLight.Gray }
            : inboundErrorRatio === 0 && outboundErrorRatio === 0 ? { value: 'Healthy', badgeCss: TrafficLight.Green }
            : inboundErrorRatio > 2 || outboundErrorRatio > 2 ? { value: 'Unhealthy', badgeCss: TrafficLight.Red }
            : { value: 'Degraded', badgeCss: TrafficLight.Yellow }
          const inboundTextCss = errorRatioToTextCss(inboundErrorRatio)
          const outboundTextCss = errorRatioToTextCss(outboundErrorRatio)
          debug('health', app.name, errorRatio, value, badgeCss, health)

          return {
            slowPoll: pollingInterval, // after the first probe, use a longer polling interval
            value,
            css: badgeCss,
            others: [
              { key: 'inboundErrorRatio', value: `${inboundErrorRatio === -1 ? '\u2014' : (100 * inboundErrorRatio).toFixed(2) + '%'}`, css: inboundTextCss },
              { key: 'outboundErrorRatio', value: `${outboundErrorRatio === -1 ? '\u2014' : (100 * outboundErrorRatio).toFixed(2) + '%'}`, css: outboundTextCss }
            ]
          }
        }
      },
      {
        outerCSS: 'hide-with-sidecar',
        fontawesome: [
          {
            fontawesome: 'fas fa-vial',
            balloon: 'Load test',
            balloonLength: 'small',
            balloonPos: 'left',
            onclick: async () => pexec(`wrk -d 20 ${await ingressFor(app.name)}`)
          }
        ]
      }
    ]
  })))
}

/**
 *
 * @return the ingress URL for the given istio application
 *
 */
const ingressFor = (appName: string): string => {
  return $$(`istio ingress "${appName}"`)
}

type Handler = (arg: string) => any
const sendFirstArgTo = (command: string, handler: Handler) => ({ argvNoOptions: args }) => {
  return handler(args[args.indexOf(command) + 1])
}

/**
 * Register the commands
 *
 */
export default async (commandTree: CommandRegistrar) => {
  commandTree.listen('/kiali/install', installKiali, { noAuthOk: true })

  const deleteCmd = commandTree.listen('/kiali/delete', uninstallKiali, { noAuthOk: true })
  commandTree.synonym('/kiali/uninstall', uninstallKiali, deleteCmd, { noAuthOk: true })

  const getAppsCmd = commandTree.listen('/kiali/get/apps', getApps, { noAuthOk: true })
  commandTree.synonym('/kiali/get/app', getApps, getAppsCmd, { noAuthOk: true })
  const getAppsCmd2 = commandTree.listen('/k/get/apps', getApps, { noAuthOk: true })
  commandTree.synonym('/k/get/app', getApps, getAppsCmd2, { noAuthOk: true })

  commandTree.listen('/kiali/console', () => client.consoleView(), { noAuthOk: true })
  commandTree.listen('/kiali/graph', ({ parsedOptions }) => client.graphView((parsedOptions as any) as client.IKialiOptions), { noAuthOk: true })
}
