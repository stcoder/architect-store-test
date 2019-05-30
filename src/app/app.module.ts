import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RootStoreModule } from './root-store/root-store.module';
import {SidebarModule} from "../../projects/sidebar/src/lib/sidebar.module";
import {HttpClientModule} from "@angular/common/http";
import { TableModule } from 'projects/table/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RootStoreModule,
    SidebarModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
