import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { selectTotalPizzaLikes } from 'src/app/store/selectors/pizzaModel.selectors';
import { selectCartCount } from 'src/app/store/selectors/pizzaCart.selectors';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @ViewChild('sidenav', { static: false }) sidenav: MatSidenav;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
  }

  close() {
    this.sidenav.close();
  }

  get cartAmount() {
    return this.store.select(selectCartCount);
  }
}
