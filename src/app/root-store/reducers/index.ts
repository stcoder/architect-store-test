import { environment } from '../../../environments/environment';
import {ActionReducerMap, MetaReducer} from "@ngrx/store";

export interface RootStore {

}

export const reducers: ActionReducerMap<RootStore> = {

};


export const metaReducers: MetaReducer<RootStore>[] = !environment.production ? [] : [];
