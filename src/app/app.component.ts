import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {setItems} from "../../projects/sidebar/src/lib/sidebar-store/actions/sidebar.actions";
import {Store} from "@ngrx/store";
import {RootStore} from "./root-store/reducers";

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <lib-sidebar></lib-sidebar>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  title = 'architect-store-test';

  constructor(private http: HttpClient, private store: Store<RootStore>) {}

  ngOnInit() {
    this
      .http
      .get('http://5cefc8a75660c400149490f8.mockapi.io/stats')
      .subscribe(items => this.store.dispatch(setItems({ items: items })));
  }

}
