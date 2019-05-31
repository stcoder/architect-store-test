import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { TableStore } from './table-store/reducers';
import { Store } from '@ngrx/store';
import {AddItems, LoadItems} from './table-store/actions/item.actions';
import {Item} from "./table-store/models/item.model";

export interface Column {
  key: string;
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class TableService {

  public columns: Column[];
  protected baseApiUrl: string;

  constructor(
    private http: HttpClient,
    private store: Store<TableStore>
  ) { }

  setColumns(columns: Column[]) {
    this.columns = columns;
  }

  setBaseApiUrl(url: string) {
    this.baseApiUrl = url;
  }

  get<T>(method: string, params?) {
    return this
      .http
      .get<Item[]>(`${this.baseApiUrl}${method}`);
  }
}
