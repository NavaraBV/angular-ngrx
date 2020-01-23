import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../app.state';
import { PizzaItem } from '../store/models/pizzas.model';
import { RemoveFromPizzaCollection } from '../store/actions/pizzalist.actions';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  pizzaCollection: PizzaItem[];

  constructor(private store: Store<AppState>) {
    store.pipe(
      select('pizzacollection')).subscribe(data => {
        this.pizzaCollection = data;
      });
  }

  ngOnInit() {
  }


  onRemove(pizza: PizzaItem) {
    this.store.dispatch(new RemoveFromPizzaCollection(pizza));
  }
}
