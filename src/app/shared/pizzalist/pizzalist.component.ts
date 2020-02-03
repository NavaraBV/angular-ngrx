import { Component, OnInit, Input } from '@angular/core';
import { PizzaItem } from '../../store/models/pizzas.model';
import { AddLike, RemoveLike } from '../../store/actions/pizza.actions';
import { AppState } from '../../app.state';
import { Store, select } from '@ngrx/store';
import { PizzaCartItem } from 'src/app/store/models/pizzacart.model';

@Component({
  selector: 'app-pizzalist',
  templateUrl: './pizzalist.component.html',
  styleUrls: ['./pizzalist.component.scss']
})
export class PizzaListComponent implements OnInit {

  @Input() pizzaList: PizzaItem[] = [];
  pizzaCart: PizzaCartItem[] = [];
  likedPizzas: PizzaItem[] = [];

  constructor(
    private store: Store<AppState>
  ) {
    store.pipe(
      // Subscribe to updates of the state
      select('pizzaModel')).subscribe(data => {
        // Get the pizzacollection from the state
        this.likedPizzas = data.likedpizzas;
      });

    store.pipe(
        // Subscribe to updates of the state
        select('pizzaCart')).subscribe(data => {
          // Get the pizzacollection from the state
          this.pizzaCart = data.cartItems;
        });
  }

  ngOnInit() {
  }

  onAdd(pizza) {
    // TODO 1
    return;
  }

  onRemove(pizza) {
    // TODO 1a
    return;
  }

  isInCart(pizza: PizzaItem) {
    // Check if the pizza exists in our pizza cart
    return this.pizzaCart.find(p => p.pizzaItem.id === pizza.id);
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
    return this.likedPizzas.find(p => p.id === pizza.id);
  }
}
