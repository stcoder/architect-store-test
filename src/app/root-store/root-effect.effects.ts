import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {activate} from "../../../projects/sidebar/src/lib/sidebar-store/actions/sidebar.actions";
import {map, switchMap, tap} from "rxjs/operators";
import {TableService} from "../../../projects/table/src/lib/table.service";
import {Store} from "@ngrx/store";
import {RootStore} from "./reducers";
import {LoadItems} from "../../../projects/table/src/lib/table-store/actions/item.actions";



@Injectable()
export class RootEffectEffects {

  @Effect({dispatch: false})
  activate$ = this.actions$.pipe(
    ofType(activate.type),
    switchMap(({id}) => {
      return this.tableService.get('/collections', {id});
    }),
    map(items => this.store.dispatch(new LoadItems({ items })))
  );

  constructor(private actions$: Actions, private tableService: TableService, private store: Store<RootStore>) {}

}
