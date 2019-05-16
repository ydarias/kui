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

import { Table, Row } from "@kui-shell/core/webapp/models/table";
import cellsFromLine from "./cells-parser";

export class RowBuilder {
  private line = "";

  private onClickFunction: any;

  constructor(line: string, onClickFunction?: any) {
    this.line = line;
    this.onClickFunction = onClickFunction;
  }

  build(): Row {
    const cells = cellsFromLine(this.line);

    if (this.onClickFunction) {
      return new Row({
        name: cells[0].value,
        attributes: cells.slice(1),
        onclick: this.onClickFunction
      });
    }

    return new Row({
      name: cells[0].value,
      attributes: cells.slice(1)
    });
  }
}
