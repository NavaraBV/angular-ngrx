import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../app.state';
import { PizzaItem } from '../store/models/pizzas.model';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  pizzaCollection: PizzaItem[];

  constructor(private store: Store<AppState>) {
    store.pipe(
      select('pizzaModel')).subscribe(data => {
        this.pizzaCollection = data.pizzacollection;
      });
  }

  ngOnInit() {
  }
}
