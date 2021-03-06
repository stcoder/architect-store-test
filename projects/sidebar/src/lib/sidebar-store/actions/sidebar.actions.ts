import {createAction, props, union} from '@ngrx/store';
import { Item } from '../../model/item';

export const setItems = createAction('[Sidebar] set items', props<{items: Item[]}>());
export const activate = createAction('[Sidebar] activate item', props<{id: string}>());

const all = union({ setItems, activate });
export type SidebarActionsUnion = typeof all;
