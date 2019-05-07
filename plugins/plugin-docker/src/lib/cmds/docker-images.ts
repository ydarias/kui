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

const doGetImages = async ({ command, execOptions }) =>
  new Promise(async (resolve, reject) => {
    const shell = await import("shelljs");
    const proc = shell.exec("docker images", {
      async: true,
      silent: true,
      env: Object.assign({}, process.env, execOptions.env || {}, {
        IBMCLOUD_COLOR: true,
        IBMCLOUD_VERSION_CHECK: false
      })
    });

    let rawOut = "";

    proc.stdout.on("data", async data => {
      rawOut += `${data}`;
    });

    proc.on("close", async exitCode => {
      if (exitCode === 0) {
        resolve(rawOut);
      } else {
        console.log("Something went wrong");
      }
    });
  });

export default (commandTree, prequire) => {
  commandTree.listen("/docker/images", doGetImages, {
    requiresLocal: true,
    noAuthOk: true
  });
};
