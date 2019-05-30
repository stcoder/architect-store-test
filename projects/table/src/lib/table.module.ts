import { NgModule } from '@angular/core';
import { TableComponent } from './table.component';
import { TableStoreModule } from './table-store/table-store.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [TableComponent],
  imports: [
    HttpClientModule,
    TableStoreModule,
  ],
  exports: [TableComponent]
})
export class TableModule { }
