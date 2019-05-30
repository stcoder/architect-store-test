import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import * as fromItem from './item.reducer';


export interface TableStore {

  items: fromItem.State;
}

export const reducers: ActionReducerMap<TableStore> = {

  items: fromItem.reducer,
};


export const metaReducers: MetaReducer<TableStore>[] = [];
