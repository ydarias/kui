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
const debug = Debug('k8s/controller/kubectl')
debug('loading')

import * as expandHomeDir from 'expand-home-dir'

import { isHeadless, inBrowser } from '@kui-shell/core/core/capabilities'
import { findFile } from '@kui-shell/core/core/find-file'
import { UsageError, IUsageModel } from '@kui-shell/core/core/usage-error'
import repl = require('@kui-shell/core/core/repl')
import { oopsMessage } from '@kui-shell/core/core/oops'
import { CommandRegistrar, CommandHandler, ExecType, IEvaluatorArgs, ParsedOptions } from '@kui-shell/core/models/command'
import { IExecOptions } from '@kui-shell/core/models/execOptions'

import abbreviations from './abbreviations'
import { formatLogs } from '../util/log-parser'
import { renderHelp } from '../util/help'
import { fillInTheBlanks } from '../util/discovery/kubeconfig'
import pickHelmClient from '../util/discovery/helm-client'
import createdOn from '../util/created-on'

import IResource from '../model/resource'
import { FinalState } from '../model/states'
import { Table } from '@kui-shell/core/webapp/models/table'
import { IDelete } from '@kui-shell/core/webapp/models/basicModels'

import { redactJSON, redactYAML } from '../view/redact'
import { registry as formatters } from '../view/registry'
import { preprocessTable, formatTable } from '../view/formatTable'
import { deleteResourceButton } from '../view/modes/crud'
import { addConditions } from '../view/modes/conditions'
import { addPods } from '../view/modes/pods'
import { addContainers } from '../view/modes/containers'
import { statusButton, renderAndViewStatus } from '../view/modes/status'
import { status as statusImpl } from './status'

interface KubeExecOptions extends IExecOptions {
  credentials?: {
    k8s: {
      kubeconfig: string
      ca: string
      cafile: string
    }
  }
}

/** lazily load js-yaml and invoke its yaml parser */
const parseYAML = async (str: string): Promise<any> => {
  const { safeLoad } = await import('js-yaml')
  return safeLoad(str)
}

/** add the user's option to the command line */
const dashify = (str: string): string => {
  if (str.length === 1) {
    return `-${str}`
  } else {
    return `--${str}`
  }
}

/**
 * Export credentials to the filesystem, if we need to
 *
 */
type CleanupFunction = () => void
const possiblyExportCredentials = (execOptions: KubeExecOptions, env: NodeJS.ProcessEnv): Promise<CleanupFunction> => new Promise(async (resolve, reject) => {
  debug('possiblyExportCredentials', process.env.KUBECONFIG, execOptions && execOptions.credentials)

  if (!process.env.KUBECONFIG && execOptions && execOptions.credentials && execOptions.credentials.k8s) {
    debug('exporting kubernetes credentials')
    const { dir: tmpDir } = await import('tmp')
    tmpDir(async (err, path, cleanupCallback) => {
      if (err) {
        reject(err)
      } else {
        const { join } = await import('path')
        const { writeFile, remove } = await import('fs-extra')
        const { kubeconfig, ca, cafile } = execOptions.credentials.k8s

        try {
          const kubeconfigFilepath = join(path, 'kubeconfig.yml')

          await Promise.all([
            writeFile(kubeconfigFilepath, kubeconfig),
            writeFile(join(path, cafile), ca)
          ])

          env.KUBECONFIG = kubeconfigFilepath
          resolve(() => remove(path))

        } catch (err) {
          reject(err)
        }
      }
    })
  } else {
    resolve(() => { /* nothing to do */ })
  }
})

/**
 * Should we attempt to display this entity as a REPL table?
 *
 * @param verb the kubectl verb, e.g. kubectl <get>
 * @param output the optional output type, e.g. kubectl get pods -o <json>
 *
 */
const shouldWeDisplayAsTable = (verb: string, entityType: string, output: string, options: ParsedOptions) => {
  const hasTableVerb = verb === 'ls' ||
    verb === 'list' ||
    verb === 'get' ||
    (verb === 'config' && entityType.match(/^get/))

  return !options.help && !options.h &&
    verb !== 'describe' &&
    verb !== 'install' &&
    (!output || output === 'wide' || output === 'name' || output.match(/^custom-columns/)) &&
    hasTableVerb
}

/**
 * Display the given string as a REPL table
 *
 */
const table = (decodedResult: string, stderr: string, command: string, verb: string, entityType: string, entity: string, options: ParsedOptions, execOptions: KubeExecOptions): Table | Table[] | HTMLElement | IDelete => {
  debug('displaying as table', verb, entityType)
  // the ?=\s+ part is a positive lookahead; we want to
  // match only "NAME " but don't want to capture the
  // whitespace
  const preTables = preprocessTable(decodedResult.split(/^(?=LAST SEEN|NAMESPACE|NAME\s+)/m))

  if (preTables && preTables.length === 1 && preTables[0].length === 0) {
    // degenerate case of "really not a table"
    return pre(decodedResult || stderr)
  } else if (preTables && preTables.length >= 1) {
    // try use display this as a table
    if (preTables.length === 1) {
      return formatTable(command, verb, entityType, options, preTables[0])
    } else {
      return preTables.map(preTable => formatTable(command, verb, entityType, options, preTable))
    }
  } else if (verb === 'delete') {
    debug('returning delete entity for repl')
    return {
      verb,
      name: entity
    }
  } else {
    // otherwise, display the raw output
    return pre(decodedResult)
  }
}

/**
 * Ensure that the given string is display in a whitespace-preserving way
 *
 */
const pre = (str: string): HTMLElement => {
  const pre = document.createElement('div')
  pre.classList.add('whitespace')
  pre.innerText = str

  return pre
}

/**
 * Confirm either the command line did not specify a -f file, or
 * that the specified -f file exists
 *
 */
const confirmFileExistence = async (filepathAsGiven: string, command: string): Promise<boolean> => {
  debug('confirmFileExistence', filepathAsGiven)

  if (!filepathAsGiven || filepathAsGiven.startsWith('http')) {
    return true
  } else if (!inBrowser()) {
    const { pathExists } = require('fs-extra')
    const filepath = findFile(filepathAsGiven)
    debug('confirmFileExistence filepath', filepath)

    if (!await pathExists(filepath)) {
      debug('file does not exist')
      throw new UsageError({
        message: `The specified file does exist: ${filepathAsGiven}`,
        extra: filepath,
        code: 404,
        usage: usage(command)
      })
    }
  } else {
    throw new UsageError({ message: '-f file not supported when running in a browser', usage: usage(command) })
  }
}

const usage = (command: string): IUsageModel => ({
  title: command,
  command,
  strict: command,
  onlyEnforceOptions: [ '-f' ],
  noHelp: true, // kubectl and helm both provide their own -h output
  docs: `Execute ${command} commands`,
  optional: [
    { name: '-f', file: true, docs: 'Filename, directory, or URL to files to use to create the resource' }
  ]
})

const prepareUsage = async (command: string): Promise<IUsageModel> => {
  debug('prepareUsage', command)

  try {
    const usage: UsageError = await repl.qexec(`${command} -h`, undefined, undefined, { failWithUsage: true })
    return usage.getUsageModel()
  } catch (err) {
    console.error('Error preparing usage')
    return undefined
  }
}

/**
 * Spawn a local executable
 *
 * @param command the executable
 * @param rawArgv the full command line, including [ command, ... ]
 * @param argv command line without options
 * @param execOptions control-channel options passed by programmatic execution
 * @param options parsed-out command line options
 *
 */
/* ({ command, argv, execOptions, argvNoOptions, parsedOptions }) => {
  return executeLocaly('helm', argv, argvNoOptions, execOptions, parsedOptions, command)
  } */
const executeLocally = (command: string) => (opts: IEvaluatorArgs) => new Promise(async (resolveBase, reject) => {
  const { block, argv: rawArgv, argvNoOptions: argv, execOptions, parsedOptions: options, command: rawCommand, createOutputStream } = opts
  debug('exec', command)

  const verb = argv[1]
  const entityType = command === 'helm' ? command : verb && verb.match(/log(s)?/) ? verb : argv[2]
  const entity = command === 'helm' ? argv[2] : entityType === 'secret' ? argv[4] : argv[3]

  if (!isHeadless() && command === 'kubectl' && verb === 'edit') {
    debug('redirecting kubectl edit to shell')
    repl.qexec(`! ${rawCommand}`, block, undefined, Object.assign({}, execOptions, { createOutputStream }))
      .then(resolveBase).catch(reject)
    return
  }

  //
  // output format option
  //
  const output = !options.help &&
    (options.output || options.o
     || (command === 'helm' && verb === 'get' && 'yaml') // helm get seems to spit out yaml without our asking
     || (command === 'kubectl' && verb === 'describe' && 'yaml')
     || (command === 'kubectl' && verb === 'logs' && 'Latest')
     || (command === 'kubectl' && verb === 'get' && execOptions.raw && 'json'))

  if ((!isHeadless() || execOptions.isProxied) &&
      !execOptions.noDelegation &&
      command === 'kubectl' &&
      ((verb === 'describe' || (verb === 'get' && (output === 'yaml' || output === 'json'))) && (execOptions.type !== ExecType.Nested || execOptions.delegationOk))) {
    debug('delegating to describe', execOptions.delegationOk, ExecType[execOptions.type].toString())
    const describeImpl = (await import('./describe')).default
    return describeImpl(opts).then(resolveBase).catch(reject)
  } else if (command === 'kubectl' && (verb === 'status' || verb === 'list')) {
    return statusImpl(verb)(opts).then(resolveBase).catch(reject)
  }

  // helm status exists; kubectl status does not, but we offer one via `k8s`
  const statusCommand = command === 'kubectl' ? 'k' : command

  // for "raw" execution, force json output
  if (command === 'kubectl' && verb === 'get' && output === 'json' && execOptions.raw && !options.output) {
    debug('forcing json output for raw mode execution', options)
    rawArgv.push('-o')
    rawArgv.push('json')
  }

  //
  // the default log limit is... unlimited? let's make sure we don't
  // cause chaos here by requesting too many log lines
  //
  if (verb === 'logs' && !options.tail && !options.since) {
    debug('limiting log lines')
    rawArgv.push('--tail')
    rawArgv.push('1000')
  }

  if (options.watch || options.w || options['watch-only']) {
    const idxs = [
      rawArgv.indexOf('--watch'),
      rawArgv.indexOf('--watch=true'),
      rawArgv.indexOf('-w'),
      rawArgv.indexOf('-w=true'),
      rawArgv.indexOf('--watch-only'),
      rawArgv.indexOf('--watch-only=true')
    ].filter(_ => _ !== -1)

    idxs.map(idx => rawArgv.splice(idx, 1))
  }

  // strip trailing e.g. .app
  const entityTypeWithoutTrailingSuffix = entityType && entityType.replace(/\..*$/, '').replace(/-[a-z0-9]{9}-[a-z0-9]{5}$/, '')

  // what we want to display for the entity kind
  const entityTypeForDisplay = abbreviations[entityTypeWithoutTrailingSuffix] || entityTypeWithoutTrailingSuffix

  const cmdlineForDisplay = argv.slice(1).join(' ')

  // replace @seed/yo.yaml with full path
  const argvWithFileReplacements: Array<string> = await Promise.all(rawArgv.slice(1).map(async (_: string): Promise<string> => {
    if (_.match(/^!.*/)) {
      // !foo params mean they flow programatically via execOptions.parameters.foo
      // we will pass this via stdin, which kubectl represents with a '-'
      return '-'
    } else if (_.match(/\.asar\//)) {
      // then this is an in-asar filepath. kubectl won't
      // know what to do with this, so copy it out
      debug('copying out of asar', _)

      const { copyOut } = await import('../util/copy') // why the dynamic import? being browser friendly here
      return copyOut(_)
    } else if (_.match(/^(@.*$)/)) {
      // then this is a cloudshell-hosted file
      const filepath = findFile(_)
      if (filepath.match(/\.asar\//)) {
        // then this is an in-asar filepath. kubectl won't
        // know what to do with this, so copy it out
        debug('copying @ file out of asar', filepath)
        const { copyOut } = await import('../util/copy') // why the dynamic import? being browser friendly here
        return copyOut(filepath)
      } else {
        return filepath
      }
    } else {
      return _
    }
  }))
  if (verb === 'delete' && !options.hasOwnProperty('wait') && command === 'kubectl') {
    // by default, apparently, kubernetes treats finalizers as
    // synchronous, and --wait defaults to true
    argvWithFileReplacements.push('--wait=false')
  }
  debug('argvWithFileReplacements', argvWithFileReplacements)

  const env = Object.assign({}, process.env)
  const cleanupCallback = await possiblyExportCredentials(execOptions as KubeExecOptions, env)
  const resolve = async val => {
    await cleanupCallback()
    resolveBase(val)
  }

  const { spawn } = await import('child_process')
  delete env.DEBUG // don't pass this through to kubectl or helm; helm in particular emits crazy output

  fillInTheBlanks(env || {})

  debug('kubeconfig', env.KUBECONFIG)

  const commandForSpawn = command === 'helm' ? await pickHelmClient(env) : command
  const child = spawn(commandForSpawn,
                      argvWithFileReplacements,
                      { env, shell: true })

  const file = (options.f || options.file)
  const isProgrammatic = file && file.charAt(0) === '!'
  const programmaticResource = isProgrammatic && execOptions.parameters[file.slice(1)]
  if (isProgrammatic) {
    const param = file.slice(1)
    debug('writing to stdin', param, programmaticResource)
    child.stdin.write(programmaticResource + '\n')
    child.stdin.end()
  }

  let out = ''
  child.stdout.on('data', data => {
    out += data.toString()
  })

  let err = ''
  child.stderr.on('data', data => {
    err += data.toString()
  })

  const status = async (command: string, code?: number, stderr?: string) => {
    if (options.f || options.file || verb === 'delete' || verb === 'create') {
      if (!execOptions.noStatus) {
        const expectedState = verb === 'create' || verb === 'apply' ? FinalState.OnlineLike : FinalState.OfflineLike
        const finalState = `--final-state ${expectedState.toString()}`
        const resourceNamespace = options.n || options.namespace
          ? `-n ${repl.encodeComponent(options.n || options.namespace)}`
          : ''

        debug('about to get status', options.f || options.file, entityType, entity, resourceNamespace)
        return repl.qexec(`${statusCommand} status ${options.f || options.file || entityType} ${entity || ''} ${finalState} ${resourceNamespace}`,
                          undefined, undefined, { parameters: execOptions.parameters })
        .catch(err => {
          if (err.code === 404 && expectedState === FinalState.OfflineLike) {
            // that's ok!
            debug('resource not found after status check, but that is ok because that is what we wanted')
            return out
          } else {
            throw err
          }
        })
      } else {
        return Promise.resolve(true)
      }
    } else if (code && code !== 0) {
      return Promise.reject(new UsageError({
        code,
        message: stderr || `${command} exited with an error`,
        usage: await prepareUsage(command)
      }))
    } else {
      return Promise.resolve(out || true)
    }
  }

  child.on('close', async (code: number) => {
    // debug('exec close', code)
    // debug('exec stdout', out)
    if (err.length > 0 || code !== 0) {
      debug('exec has stderr with code %s', code)
      debug('exec stderr args', argvWithFileReplacements.join(' '))
      debug('exec stderr', err)
    } else if (verb === 'delete') {
      debug('exec OK', argvWithFileReplacements.join(' '))
    }

    // e.g. kubectl config without any args results in an exit code of 1
    // whereas kubectl config -h results in an exit code of 0,
    // but we'd like to display them the same
    const originalCode = code
    const isUsage = code !== 0 &&
      ((verb === 'config' && !entityType && !entity) ||
       (/Error: unknown.*flag/i.test(err)))
    if (isUsage) {
      code = 0
      out = err
    }

    const noResources = err.match(/no resources found/i)
    if (code !== 0 || noResources) {
      //
      // then kubectl exited with some error
      //

      const message = err
      const fileNotFound = message.match(/error: the path/)
      const codeForREPL = noResources || message.match(/not found/i) || message.match(/doesn't have/i) ? 404
        : message.match(/already exists/i) ? 409
        : fileNotFound ? 412
        : 500

      debug('handling non-zero exit code %s', code, codeForREPL, err)

      // fail function
      const nope = async () => {
        if (execOptions.failWithUsage) {
          reject(undefined)
        } else {
          const usage = await prepareUsage(command)
          if (!usage) {
            // error generating usage
            reject(message)
          } else {
            reject(new UsageError({ message: err, code: codeForREPL, usage }))
          }
        }
      }

      if (codeForREPL === 404 || codeForREPL === 409 || codeForREPL === 412) {
        // already exists or file not found?
        const error = new Error(err)
        error['code'] = codeForREPL
        debug('rejecting without usage', codeForREPL, error)
        reject(error)
      } else if ((verb === 'create' || verb === 'apply' || verb === 'delete') && (options.f || options.file)) {
        debug('fetching status after error')
        status(command, codeForREPL, err).then(resolve).catch(reject)
      } else {
        nope()
      }
    } else if (execOptions.raw || (isHeadless() && !output && execOptions.type === ExecType.TopLevel && !execOptions.isProxied)) {
      //
      // caller asked for the raw output
      //
      // debug('raw', output);
      debug('resolving raw', argvWithFileReplacements.join(' '), output)
      if (output === 'json') {
        try {
          const json = JSON.parse(out)
          resolve(json.items || json)
        } catch (err) {
          console.error(err)
          resolve(pre(out))
        }
      } else {
        resolve(out.trim())
      }
    } else if (options.help || options.h || argv.length === 1 || isUsage) {
      try {
        resolve(renderHelp(out, command, verb, originalCode, entityType))
      } catch (err) {
        console.error('error rendering help', err)
        reject(out)
      }
    } else if (command === 'kubectl' && verb === 'get' && (options.watch || options.w)) {
      // kubectl get --watch mode?
      debug('delegating to k status')
      const ns = options.n || options.namespace
        ? `-n ${repl.encodeComponent(options.n || options.namespace)}`
        : ''
      return repl.qexec(`k status ${entityType} ${entity || ''} ${ns}`).then(resolveBase, reject)
    } else if (output === 'json' || output === 'yaml' || verb === 'logs') {
      //
      // return a sidecar entity
      //
      debug('formatting structured output', output)

      const result = output === 'json'
        ? JSON.parse(out)
        : verb === 'logs' ? formatLogs(out)
        : output === 'yaml' ? redactYAML(out, options)
        : redactJSON(out, options)

      // debug('structured output', result)

      if (isHeadless() && execOptions.type === ExecType.TopLevel && !execOptions.isProxied) {
        debug('directing resolving', isHeadless())
        return resolve(result)
      }

      const modes: Array<any> = [{
        mode: 'result',
        direct: rawCommand,
        label: output === 'json' || output === 'yaml' ? output.toUpperCase() : output,
        defaultMode: true
      }]

      if (verb === 'logs') {
        modes.push({
          mode: 'previous',
          direct: `${rawCommand} --previous`,
          execOptions: {
            type: 'pexec'
          }
        })

        if (options.previous) {
          modes[0].defaultMode = false
          modes[1].defaultMode = true
        }
      }

      const yaml = verb === 'get' && await parseYAML(out)
      const subtext = createdOn(yaml)

      // sidecar badges
      const badges = []
      badges.push(yaml && yaml.metadata && yaml.metadata.generation && `Generation ${yaml.metadata.generation}`)

      if (verb === 'get') {
        const resource: IResource = { kind: command !== 'helm' && yaml.kind, name: entity, yaml }
        modes.push(statusButton(command, resource, FinalState.NotPendingLike))

        addConditions(modes, command, resource)
        addPods(modes, command, resource)
        addContainers(modes, command, resource)

        deleteResourceButton(() => renderAndViewStatus({ command, resource, finalState: FinalState.OfflineLike }))
        modes.push(deleteResourceButton())
      }

      const content = result

      const record = {
        type: 'custom',
        isEntity: true,
        name: entity || verb,
        packageName: (yaml && yaml.metadata && yaml.metadata.namespace) || cmdlineForDisplay,
        namespace: options.namespace || options.n,
        version: yaml && yaml.metadata && yaml.metadata.labels && yaml.metadata.labels.version,
        prettyType: (yaml && yaml.kind) || entityTypeForDisplay || command,
        subtext,
        noCost: true, // don't display the cost in the UI
        modes,
        badges: badges.filter(x => x),
        content
      }

      record['contentType'] = output

      debug('exec output json', record)
      resolve(record)
    } else if (command === 'kubectl' && verb === 'run' && argv[2]) {
      const entity = argv[2]
      const namespace = options.namespace || options.n || 'default'
      debug('status after kubectl run', entity, namespace)
      repl.qexec(`k status deploy "${entity}" -n "${namespace}"`).then(resolve).catch(reject)
    } else if ((options.f || options.file || (command === 'kubectl' && entity)) && (verb === 'create' || verb === 'apply' || verb === 'delete')) {
      //
      // then this was a create or delete from file; show the status of the operation
      //
      debug('status after success')
      status(command).then(resolve).catch(reject)
    } else if (formatters[command] && formatters[command][verb]) {
      debug('using custom formatter')
      resolve(formatters[command][verb].format(command, verb, entityType, options, out))
    } else if (shouldWeDisplayAsTable(verb, entityType, output, options)) {
      //
      // tabular output
      //
      debug('attempting to display as a table')
      resolve(table(out, err, command, verb, command === 'helm' ? '' : entityType, entity, options, execOptions))
    } else {
      //
      // otherwise, return raw text for display in the repl
      //
      debug('passing through preformatted output')
      resolve(pre(out))
    }
  })
})

/**
 * Executor implementations
 *
 */
const kubectl = executeLocally('kubectl')
const helm = executeLocally('helm')

/**
 * Delegate 'k8s <verb>' to 'kubectl verb'
 *
 */
const dispatchViaDelegationTo = (delegate: CommandHandler) => (opts: IEvaluatorArgs) => {
  if (opts.argv[0] === 'k8s') {
    opts.argv[0] = 'kubectl'
    opts.argvNoOptions[0] = 'kubectl'
    opts.command = opts.command.replace(/^(\s*)(k8s)(\s*)/, '$1kubectl$2')
  } else {
    opts.argv.splice(0, 0, 'kubectl')
    opts.argvNoOptions.splice(0, 0, 'kubectl')
    opts.command = `kubectl ${opts.command}`
  }

  debug('delegating invoke', opts.argv[0], opts.command)
  return delegate(opts)
}

/**
 * Register the commands
 *
 */
export default async (commandTree: CommandRegistrar) => {
  const kubectlCmd = await commandTree.listen('/k8s/kubectl', kubectl, { usage: usage('kubectl'), requiresLocal: true, noAuthOk: [ 'openwhisk' ] })
  await commandTree.synonym('/k8s/k', kubectl, kubectlCmd, { usage: usage('kubectl'), requiresLocal: true, noAuthOk: [ 'openwhisk' ] })

  await commandTree.listen('/k8s/helm', helm, { usage: usage('helm'), requiresLocal: true, noAuthOk: [ 'openwhisk' ] })

  //
  // register some of the common verbs so that the kubectl plugin works more gracefully:
  // e.g. kubectl kui get pods
  //
  const shorthands = [
    'create',
    'get',
    'delete',
//    'describe',
    'explain',
    'logs'
  ]
  await Promise.all(shorthands.map(verb => {
    return commandTree.listen(`/k8s/${verb}`,
                              dispatchViaDelegationTo(kubectl),
                              { usage: usage('kubectl'), requiresLocal: true, noAuthOk: [ 'openwhisk' ] })
  }))
}
