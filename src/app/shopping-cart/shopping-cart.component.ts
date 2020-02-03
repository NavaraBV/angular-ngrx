import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../app.state';
import { PizzaCartItem } from '../store/models/pizzacart.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  pizzaCart: PizzaCartItem[];

  constructor(
    private store: Store<AppState>
  ) {
    store.pipe(
      // Subscribe to updates of the state
      select('pizzaCart')).subscribe(data => {
        // Get the pizzacollection from the state
        this.pizzaCart = data.cartItems;
      });
  }

  ngOnInit() {
  }

  onRemove(cartItem: PizzaCartItem) {
    // TODO 1a
    return;
  }

  onIncrease(cartItem: PizzaCartItem) {
    // TODO 1b
    return;
  }

  onDecrease(cartItem: PizzaCartItem) {
    // TODO 1b
    return;
  }

  get cartTotal() {
    // TODO 3a
    return 0;
  }
}
