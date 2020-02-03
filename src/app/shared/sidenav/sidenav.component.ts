import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';

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
    // TODO 3
    return 0;
  }
}
