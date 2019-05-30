import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {setItems} from "../../projects/sidebar/src/lib/sidebar-store/actions/sidebar.actions";
import {Store} from "@ngrx/store";
import {RootStore} from "./root-store/reducers";
import { Item } from 'projects/sidebar/src/lib/model/item';
import { TableService } from 'projects/table/src/public-api';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <lib-sidebar></lib-sidebar>
        </div>
        <div class="col-md-8">
          <lib-table></lib-table>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  title = 'architect-store-test';

  constructor(
    private http: HttpClient,
    private store: Store<RootStore>,
    private table: TableService
  ) {
    this.table.setColumns([
      { key: 'id', title: 'Id' },
      { key: 'avatar', title: 'Avatar' },
      { key: 'name', title: 'Name' },
      { key: 'amount', title: 'Amount' },
      { key: 'createdAt', title: 'Created at' }
    ]);

    this.table.setBaseApiUrl('http://5cefc8a75660c400149490f8.mockapi.io/');
  }

  ngOnInit() {
    this
      .http
      .get<Item[]>('http://5cefc8a75660c400149490f8.mockapi.io/stats')
      .subscribe(items => this.store.dispatch(setItems({ items: items })));
  }

}
