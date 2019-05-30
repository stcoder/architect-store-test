import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromTableStore from './reducers';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('tableStore', fromTableStore.reducers, { metaReducers: fromTableStore.metaReducers })
  ]
})
export class TableStoreModule { }
