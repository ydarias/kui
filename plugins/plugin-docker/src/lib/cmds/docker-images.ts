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

import { Table, Row, Cell } from "@kui-shell/core/webapp/models/table";

const cellsFromLine = (row: string): Cell[] =>
  row.split(/\t+|\s{2,}/).map(cell => new Cell({ value: cell }));

const rowsFromLines = (lines: string[]): Row[] => {
  return lines
    .filter(line => line && line.length > 0)
    .map(line => {
      const cells = cellsFromLine(line);

      return new Row({
        name: cells[0].value,
        attributes: cells.slice(1)
      });
    });
};

const headerFromLine = (line: string): Row => {
  const cells = cellsFromLine(line);

  return new Row({
    name: cells[0].value,
    attributes: cells.slice(1)
  });
};

const toNiceTable = (output: string) => {
  const rows = output.split(/[\n\r]/);

  const headerRow = headerFromLine(rows[0]);

  const body = rowsFromLines(rows.slice(1));

  return new Table({
    noEntityColors: true,
    noSort: true,
    header: headerRow,
    body
  });
};

const doGetImages = args =>
  new Promise((resolve, reject) => {
    const shell = require("shelljs");
    const proc = shell.exec("docker images", {
      async: true,
      silent: true,
      env: Object.assign({}, process.env, args.execOptions.env || {}, {
        IBMCLOUD_COLOR: true,
        IBMCLOUD_VERSION_CHECK: false
      })
    });

    let rawOut = "";

    proc.stdout.on("data", data => {
      rawOut += `${data}`;
    });

    proc.on("close", exitCode => {
      if (exitCode === 0) {
        resolve(rawOut);
      } else {
        console.log("Something went wrong");
      }
    });
  }).then(toNiceTable);

export default (commandTree, prequire) => {
  commandTree.listen("/docker/images", doGetImages, {
    requiresLocal: true,
    noAuthOk: true
  });
};
