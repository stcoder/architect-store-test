import { NgModule } from '@angular/core';
import { TableComponent } from './table.component';
import { TableStoreModule } from './table-store/table-store.module';
import { HttpClientModule } from '@angular/common/http';
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    TableStoreModule,
  ],
  exports: [TableComponent]
})
export class TableModule { }
