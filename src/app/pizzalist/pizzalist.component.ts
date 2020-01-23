import { Component, OnInit, Input } from '@angular/core';
import { PizzaItem } from '../store/models/pizzas.model';
import { AddToPizzaCollection, RemoveFromPizzaCollection, AddLike, RemoveLike } from '../store/actions/pizzalist.actions';
import { AppState } from '../app.state';
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
      select('pizzacollection')).subscribe(data => {
        this.pizzaCollection = data;
      });

    store.pipe(
      select('likedpizzas')).subscribe(data => {
        this.likedPizzas = data;
      });
  }

  ngOnInit() {
  }

  onAdd(pizza) {
    this.store.dispatch(new AddToPizzaCollection(pizza));
  }

  onRemove(pizza) {
    this.store.dispatch(new RemoveFromPizzaCollection(pizza));
  }

  isInCollection(pizza: PizzaItem) {
    return this.pizzaCollection.find(p => p.id == pizza.id);
  }

  onLike(pizza) {
    this.store.dispatch(new AddLike(pizza));
  }

  onRemovelike(pizza) {
    this.store.dispatch(new RemoveLike(pizza));
  }

  hasLiked(pizza: PizzaItem) {
    return this.likedPizzas.find(p => p.id == pizza.id);
  }
}
