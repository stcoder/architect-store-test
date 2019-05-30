import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Item } from '../models/item.model';
import { ItemActions, ItemActionTypes } from '../actions/item.actions';

export interface State extends EntityState<Item> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Item> = createEntityAdapter<Item>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export function reducer(
  state = initialState,
  action: ItemActions
): State {
  switch (action.type) {
    case ItemActionTypes.AddItem: {
      return adapter.addOne(action.payload.item, state);
    }

    case ItemActionTypes.UpsertItem: {
      return adapter.upsertOne(action.payload.item, state);
    }

    case ItemActionTypes.AddItems: {
      return adapter.addMany(action.payload.items, state);
    }

    case ItemActionTypes.UpsertItems: {
      return adapter.upsertMany(action.payload.items, state);
    }

    case ItemActionTypes.UpdateItem: {
      return adapter.updateOne(action.payload.item, state);
    }

    case ItemActionTypes.UpdateItems: {
      return adapter.updateMany(action.payload.items, state);
    }

    case ItemActionTypes.DeleteItem: {
      return adapter.removeOne(action.payload.id, state);
    }

    case ItemActionTypes.DeleteItems: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case ItemActionTypes.LoadItems: {
      return adapter.addAll(action.payload.items, state);
    }

    case ItemActionTypes.ClearItems: {
      return adapter.removeAll(state);
    }

    default: {
      return state;
    }
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
