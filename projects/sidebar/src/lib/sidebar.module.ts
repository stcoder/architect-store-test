import { NgModule } from '@angular/core';
import { SidebarComponent } from './sidebar.component';
import {SidebarStoreModule} from "./sidebar-store/sidebar-store.module";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    SidebarStoreModule
  ],
  exports: [SidebarComponent]
})
export class SidebarModule { }
