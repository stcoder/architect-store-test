import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromSidebarStore from './reducers';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('sidebarStore', fromSidebarStore.reducer, { metaReducers: fromSidebarStore.metaReducers })
  ]
})
export class SidebarStoreModule { }
