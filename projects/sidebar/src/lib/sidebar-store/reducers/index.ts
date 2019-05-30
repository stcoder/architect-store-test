import {createFeatureSelector, createSelector, MetaReducer} from '@ngrx/store';
import {activate, setItems, SidebarActionsUnion} from '../actions/sidebar.actions';


export interface SidebarStore {
  items: {}[];
  active: null | string;
}

export const initialState: SidebarStore = {
  items: [],
  active: null
};

export function reducer(state: SidebarStore = initialState, action: SidebarActionsUnion) {
  switch (action.type) {
    case setItems.type:
      return {
        items: action.items,
        active: null
      };
    case activate.type:
      return {
        ...state,
        active: action.id
      };
    default:
      return state;
  }
}

export const metaReducers: MetaReducer<SidebarStore>[] = [];

export const sidebarStore = createFeatureSelector<SidebarStore>('sidebarStore');

export const getItems = createSelector(sidebarStore, state => state.items);

export const getActive = createSelector(sidebarStore, state => state.active);
