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

import { Row, Table, Cell } from "@kui-shell/core/webapp/models/table";
const repl = require("@kui-shell/core/core/repl");

const addClickHandlers = (table: Table): Table => {
  console.log(`Converting to a nice table`);

  const body: Row[] = table.body.map(
    (row): Row => {
      const nameAttr = row.attributes.find(({ key }) => key === "NAME");
      const { value: contextName } = nameAttr;

      nameAttr.outerCSS += " entity-name-group-narrow";

      row.name = contextName;
      nameAttr.onclick = onclick;

      return row;
    }
  );

  return new Table({
    header: table.header,
    body: body,
    title: "Docker images"
  });
};

const usage = {
  add: {
    command: "docker images",
    strict: "docker images",
    title: "Docker images list",
    header: "Images listing of your local Docker",
    example: "docker images"
  }
};

const listImages = () => "This is the docker images output";

/**
 * Register command handlers
 */
export default (commandTree, prequire) => {
  commandTree.listen("/docker/images", listImages, {
    usage,
    noAuthOk: true,
    requiresLocal: true
  });
};
