import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Item } from '../models/item.model';

export enum ItemActionTypes {
  LoadItems = '[Item] Load Items',
  AddItem = '[Item] Add Item',
  UpsertItem = '[Item] Upsert Item',
  AddItems = '[Item] Add Items',
  UpsertItems = '[Item] Upsert Items',
  UpdateItem = '[Item] Update Item',
  UpdateItems = '[Item] Update Items',
  DeleteItem = '[Item] Delete Item',
  DeleteItems = '[Item] Delete Items',
  ClearItems = '[Item] Clear Items'
}

export class LoadItems implements Action {
  readonly type = ItemActionTypes.LoadItems;

  constructor(public payload: { items: Item[] }) {}
}

export class AddItem implements Action {
  readonly type = ItemActionTypes.AddItem;

  constructor(public payload: { item: Item }) {}
}

export class UpsertItem implements Action {
  readonly type = ItemActionTypes.UpsertItem;

  constructor(public payload: { item: Item }) {}
}

export class AddItems implements Action {
  readonly type = ItemActionTypes.AddItems;

  constructor(public payload: { items: Item[] }) {}
}

export class UpsertItems implements Action {
  readonly type = ItemActionTypes.UpsertItems;

  constructor(public payload: { items: Item[] }) {}
}

export class UpdateItem implements Action {
  readonly type = ItemActionTypes.UpdateItem;

  constructor(public payload: { item: Update<Item> }) {}
}

export class UpdateItems implements Action {
  readonly type = ItemActionTypes.UpdateItems;

  constructor(public payload: { items: Update<Item>[] }) {}
}

export class DeleteItem implements Action {
  readonly type = ItemActionTypes.DeleteItem;

  constructor(public payload: { id: string }) {}
}

export class DeleteItems implements Action {
  readonly type = ItemActionTypes.DeleteItems;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearItems implements Action {
  readonly type = ItemActionTypes.ClearItems;
}

export type ItemActions =
 LoadItems
 | AddItem
 | UpsertItem
 | AddItems
 | UpsertItems
 | UpdateItem
 | UpdateItems
 | DeleteItem
 | DeleteItems
 | ClearItems;
