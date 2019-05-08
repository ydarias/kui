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

const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')

const webCompress = process.env.WEB_COMPRESS
console.log('compression', webCompress)
const noCompression = webCompress === 'none'
const useGzip = webCompress === 'gzip'
console.log('useGzip', useGzip)
const CompressionPlugin = !noCompression && require(useGzip ? 'compression-webpack-plugin' : 'brotli-webpack-plugin')

// const Visualizer = require('webpack-visualizer-plugin')

/** point webpack to the root directory */
const stageDir = process.env.KUI_STAGE

/** point webpack to the output directory */
const buildDir = process.env.KUI_BUILDDIR

/**
 * Define the set of bundle entry points; there is one default entry
 * point (the main: entry below). On top of this, we scan the plugins,
 * looking to see if they define a `webpack.entry` field in their
 * package.json; if so, we add this to the mix. See plugin-editor for
 * an example of this.
 *
 */
const main = path.join(stageDir, 'node_modules/@kui-shell/core/webapp/bootstrap/webpack')
const pluginBase = path.join(stageDir, 'node_modules/@kui-shell')
const pluginEntries = require('fs').readdirSync(pluginBase).map(dir => {
  try {
    const pjson = path.join(pluginBase, dir, 'package.json')
    const { kui } = require(pjson)
    return kui && kui.webpack && kui.webpack.entry
  } catch (err) {
  }
}).filter(x => x)
const entry = Object.assign({ main }, ...pluginEntries)
console.log('entry', entry)

const plugins = [ ]

// any compression plugins?
if (CompressionPlugin) {
  plugins.push(new CompressionPlugin({ deleteOriginalAssets: true }))
}

// for debugging, webpack stats plugin
/* plugins.push(new Visualizer({ filename: './webpack-stats.html' })) */

// the Kui builder plugin
plugins.push({
  apply: compiler => {
    compiler.hooks.compilation.tap('KuiHtmlBuilder', compilation => {
      compilation.hooks.afterHash.tap('KuiHtmlBuilder', () => {
        // we need to inject the name of the main bundle into the configuration
        const hash = compilation.hash
        const main = `main.${hash}.bundle.js` // <-- this is the name of the main bundle
        console.log('KuiHtmlBuilder using this build hash', hash)

        const overrides = {
          build: { writeConfig: false },
          env: { main, hash }
        }

        // and this will inject it
        const Builder = require(path.join(process.env.KUI_BUILDER_HOME, 'lib/configure'))
        new Builder().build('webpack', overrides)
      })
    })
  }
})

module.exports = {
  context: stageDir,
  stats: {
    // while developing, you should set this to true
    warnings: false
  },
  entry,
  target: 'web',
  node: {
    fs: 'empty',
    child_process: 'empty',
    'node-docker-api': 'empty',
    'docker-modem': 'empty',
    'fs-extra': 'empty'
  },
  externals: [
    'tape', // modules/composer/node_modules/safer-buffer
    'dns', // modules/openwhisk/node_modules/retry/example/dns.js
    'tls', // needed by request
    'tap', // wskflow
    'request', // needed by some apache-composer samples
    'babel-core/register', // wskflow
    'aws-sdk', // wskflow
    'node-pty', // bash-like
    './es6/crc9_1wire', // k8s
    './es6/crc17_xmodem', // k8s, openwhisk
    './es6/crc17_modbus', // k8s, openwhisk
    './es6/crc17_kermit', // k8s, openwhisk
    './es6/crc17_ccitt', // k8s, openwhisk
    'ws',
    'readline',
    'chokidar',
    'fsevents',
    'shelljs',
    'lodash',
    'async',
    'module',
    'net',
    'webworker-threads', // wskflow
    'xml2js', // used by ./app/plugins/modules/composer/@demos/combinators/http.js
    'redis', 'redis-commands', // openwhisk-composer
    'nyc',
    'electron'
  ],
  devServer: {
    headers: { 'Access-Control-Allow-Origin': '*' }
  },
  optimization: {
    /* splitChunks: {
      // maxAsyncRequests: 6
      // minSize: 1000000
    }, */
    /* splitChunks: {
      chunks: 'all',
      cacheGroups: {
        default: false,
        vendors: false,
        editor: {
          priority: 10,
          test: /modules\/editor/
        },
        composer: {
          priority: 10,
          test: /modules\/composer/
        },
        'misc-modules': {
          priority: 5,
          test: /app\/plugins\/modules\//
        },
        'core-plugins': {
          priority: 1,
          test: /app\/plugins\//
        },
        'activation-visualizations': {
          priority: 10,
          test: /modules\/activation-visualizations/
        },
        'wskflow': {
          priority: 10,
          test: /modules\/wskflow/
        }
      }
    }, */
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {}
        }
      })
    ]
  },
  module: {
    rules: [
      //
      // typescript exclusion rules
      { test: /\/src\/*\.ts/, use: 'ignore-loader' },
      { test: /\/node_modules\/typescript\//, use: 'ignore-loader' },
      { test: /\/node_modules\/proxy-agent\//, use: 'ignore-loader' },
      { test: /\/node_modules\/@babel\//, use: 'ignore-loader' },
      { test: /\/node_modules\/@types\//, use: 'ignore-loader' },
      { test: /fetch-ui/, use: 'ignore-loader' },
      // end of typescript rules
      //
      // the following elide terser from modules/plugin
      { test: /\/modules\/field-installed-plugins\//, use: 'ignore-loader' },
      { test: /\/modules\/field-installed-plugins\/node_modules\/buffer-from/, use: 'ignore-loader' },
      { test: /\/modules\/field-installed-plugins\/node_modules\/commander/, use: 'ignore-loader' },
      { test: /\/modules\/field-installed-plugins\/node_modules\/source-map/, use: 'ignore-loader' },
      { test: /\/modules\/field-installed-plugins\/node_modules\/terser/, use: 'ignore-loader' },
      { test: /\/terser\/tools/, use: 'ignore-loader' },
      // end of modules/plugin rules
      //
      // we don't want to pull in both the dynamic imports and the static imports
      // otherwise the splitter (seeing the static imports) won't be as effective
      // { test: /app\/content\/js\/static-import.js$/, use: 'raw-loader' },
      //
      { test: /\/modules\/editor\/node_modules\/monaco-editor\/min/, use: 'raw-loader' },
      { test: /\/modules\/editor\/plugin\/lib\/cmds\/edit-amd\.js/, use: 'raw-loader' },
      { test: /beautify-html\.js/, use: 'ignore-loader' },
      { test: /package-lock\.json/, use: 'ignore-loader' },
      { test: /jquery\.map/, use: 'ignore-loader' },
      { test: /sizzle\.min\.map/, use: 'ignore-loader' },
      { test: /\/modules\/queue-view\//, use: 'ignore-loader' },
      { test: /\/node_modules\/proxy-agent\//, use: 'ignore-loader' },
      { test: /\/node_modules\/fsevents\//, use: 'ignore-loader' },
      { test: /\/node_modules\/nan\//, use: 'ignore-loader' },
      { test: /translation-demo\/composition.js$/, use: 'ignore-loader' },
      { test: /@seed/, use: 'ignore-loader' },
      { test: /\.DOCS/, use: 'ignore-loader' },
      { test: /\/docs\//, use: 'ignore-loader' },
      { test: /\/examples\//, use: 'ignore-loader' },
      { test: /plugins\/*\/node_modules/, use: 'ignore-loader' },
      { test: /packages\/*\/node_modules/, use: 'ignore-loader' },
      // { test: /modules\/composer\/@demos\/.*\.js/, use: 'raw-loader' },
      // DANGEROUS: some node modules must have critical files under src/: { test: /\/src\//, use: 'ignore-loader' },
      { test: /\/test\//, use: 'ignore-loader' },
      { test: /\/tests\//, use: 'ignore-loader' },
      { test: /AUTHORS/, use: 'ignore-loader' },
      { test: /LICENSE/, use: 'ignore-loader' },
      { test: /license.txt/, use: 'ignore-loader' },
      { test: /\.md$/, use: 'ignore-loader' },
      { test: /\.markdown$/, use: 'ignore-loader' },
      { test: /~$/, use: 'ignore-loader' },
      { test: /\.tsx?$/, use: 'ignore-loader' },
      { test: /Dockerfile$/, use: 'ignore-loader' },
      // end of ignore-loader
      //
      // { test: /\.js$/, use: ['source-map-loader'], enforce: 'pre' },
      // { test: /samples\/.*\.js$/, use: 'raw-loader' }, // don't try to parse out sample input, e.g. for dependencies
      { test: /\.js.map$/, use: 'ignore-loader' },
      { test: /\.py$/, use: 'file-loader' },
      { test: /\.ico$/, use: 'file-loader' },
      { test: /\.jpg$/, use: 'file-loader' },
      { test: /\.png$/, use: 'file-loader' },
      { test: /\.svg$/, use: 'svg-inline-loader' },
      { test: /\.css$/, use: [ 'to-string-loader', 'css-loader' ] },
      { test: /\.sh$/, use: 'raw-loader' },
      { test: /\.html$/, use: 'raw-loader' },
      { test: /\.yaml$/, use: 'raw-loader' },
      { test: /monaco-editor\/min\/vs\/loader\.js/, use: 'raw-loader' },
      { test: /^kubectl-kui$/, use: 'shebang-loader' },
      { test: /^kubectl-wsk$/, use: 'shebang-loader' },
      { test: /^kui$/, use: 'shebang-loader' },
      { test: /JSONStream\/index.js$/, use: 'shebang-loader' }
    ]
  },
  plugins,
  output: {
    globalObject: 'self', // for monaco
    path: buildDir,
    filename: '[name].[hash].bundle.js'
  }
}
