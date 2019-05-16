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
import { RowBuilder } from "./row-builder";

export class TableBuilder {
  private input = "";

  private onClickFunction: any;

  /**
   *
   * @param input A shell output table represented as text.
   */
  constructor(input: string) {
    this.input = input;
  }

  withOnClick(onClickFunction: any): TableBuilder {
    this.onClickFunction = onClickFunction;
    return this;
  }

  private cellsFromLine = (row: string): Cell[] =>
    row.split(/\t+|\s{2,}/).map(cell => new Cell({ value: cell }));

  private rowsFromLines = (lines: string[]): Row[] => {
    return lines
      .filter(line => line && line.length > 0)
      .map(line => new RowBuilder(line, this.onClickFunction).build());
  };

  private headerFromLine = (line: string): Row => {
    const cells = this.cellsFromLine(line);

    return new Row({
      name: cells[0].value,
      attributes: cells.slice(1)
    });
  };

  build(): Table {
    const rows = this.input.split(/[\n\r]/);
    const headerRow = this.headerFromLine(rows[0]);
    const body = this.rowsFromLines(rows.slice(1));

    return new Table({
      noEntityColors: true,
      noSort: true,
      header: headerRow,
      body
    });
  }
}
