import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {getActive, getItems, SidebarStore} from "./sidebar-store/reducers";
import {select, Store} from "@ngrx/store";
import {activate} from "./sidebar-store/actions/sidebar.actions";

@Component({
  selector: 'lib-sidebar',
  template: `
    <div class="nav flex-column nav-pills">
      <a 
        href="#" 
        (click)="selectItem(item)" 
        class="nav-link" 
        *ngFor="let item of items$ | async"
        [ngClass]="{'active': (active$ | async) === item.id}"
      >
        {{ item.name }}
        <span *ngIf="item.count" class="badge badge-warning">{{ item.count }}</span>
      </a>
    </div>
  `,
  styles: []
})
export class SidebarComponent implements OnInit {

  public items$: Observable<object[]>;
  public active$: Observable<string>;

  constructor(private store: Store<SidebarStore>) { }

  ngOnInit() {
    this.items$ = this.store.pipe(select(getItems));
    this.active$ = this.store.pipe(select(getActive));
  }

  selectItem(item) {
    this.store.dispatch(activate({id: item.id}));
  }

}
