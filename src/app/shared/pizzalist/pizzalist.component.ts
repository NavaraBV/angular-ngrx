import { Component, OnInit, Input } from '@angular/core';
import { PizzaItem } from '../../store/models/pizzas.model';
import { AddToPizzaCollection, RemoveFromPizzaCollection, AddLike, RemoveLike } from '../../store/actions/pizza.actions';
import { AppState } from '../../app.state';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-pizzalist',
  templateUrl: './pizzalist.component.html',
  styleUrls: ['./pizzalist.component.scss']
})
export class PizzaListComponent implements OnInit {

  @Input() pizzaList: PizzaItem[] = [];
  pizzaCollection: PizzaItem[] = [];
  likedPizzas: PizzaItem[] = [];

  constructor(
    private store: Store<AppState>
  ) {
    store.pipe(
      // Subscribe to updates of the state
      select('pizzacollection')).subscribe(data => {
        // Get the pizzacollection from the state
        this.pizzaCollection = data;
      });

    store.pipe(
      // Subscribe to updates of the state
      select('likedpizzas')).subscribe(data => {
        // Get the likedpizzas from the state
        this.likedPizzas = data;
      });
  }

  ngOnInit() {
  }

  onAdd(pizza) {
    // Add the pizza to the pizzacollection in our state 
    this.store.dispatch(new AddToPizzaCollection(pizza));
  }

  onRemove(pizza) {
    // Remove the pizza from the pizzacollection in our state 
    this.store.dispatch(new RemoveFromPizzaCollection(pizza));
  }

  isInCollection(pizza: PizzaItem) {
    // Check if the pizza exists in our pizzacollection
    return this.pizzaCollection.find(p => p.id == pizza.id);
  }

  onLike(pizza) {
    // Add the pizza to the likedpizzas in our state 
    this.store.dispatch(new AddLike(pizza));
  }

  onRemovelike(pizza) {
    // Remove the pizza from the likedpizzas in our state 
    this.store.dispatch(new RemoveLike(pizza));
  }

  hasLiked(pizza: PizzaItem) {
    // Check if the pizza exists in our likedpizzas
    return this.likedPizzas.find(p => p.id == pizza.id);
  }
}
