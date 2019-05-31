import { Component, OnInit } from '@angular/core';
import {TableService} from "./table.service";
import {Observable} from "rxjs";
import {Item} from "./table-store/models/item.model";
import {select, Store} from "@ngrx/store";
import {selectAll} from './table-store/reducers/item.reducer';
import {EntityState} from "@ngrx/entity";
import {tap} from "rxjs/operators";

@Component({
  selector: 'lib-table',
  template: `
    <table class="table">
      <thead>
        <tr>
          <th scope="col" *ngFor="let column of columns">{{ column.title }}</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let row of rows$ | async">
          <td *ngFor="let column of columns">{{ getData(column, row) }}</td>
        </tr>
      </tbody>
    </table>
  `,
  styles: []
})
export class TableComponent implements OnInit {

  public columns = this.tableService.columns;
  public rows$: Observable<Item[]>;

  constructor(
    private tableService: TableService,
    private store: Store<EntityState<Item>>
  ) { }

  ngOnInit() {
    this.rows$ = this.store.pipe(select(selectAll));
  }

  getData(column, row) {
    return row[column.key];
  }

}
