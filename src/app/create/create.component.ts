import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../app.state';
import { PizzaItem } from '../store/models/pizzas.model'
import * as PizzalistActions from '../store/actions/pizzalist.actions';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  addTodo(title, description) {
    this.store.dispatch(new PizzalistActions.AddPizza({ name: title, description: description, price: 1.0 }));
  }

}
