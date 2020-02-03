import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../app.state';
import { PizzaCartItem } from '../store/models/pizzacart.model';
import { IncreaseCartAmount, DecreaseCartAmount, RemoveFromCart } from '../store/actions/pizzacart.actions';
import { selectCartTotalPrice } from '../store/selectors/pizzaCart.selectors';

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

  onIncrease(cartItem: PizzaCartItem) {
    this.store.dispatch(new IncreaseCartAmount(cartItem));
  }

  onDecrease(cartItem: PizzaCartItem) {
    this.store.dispatch(new DecreaseCartAmount(cartItem));
  }

  onRemove(cartItem: PizzaCartItem) {
    this.store.dispatch(new RemoveFromCart(cartItem.pizzaItem));
  }

  get cartTotal() {
    return this.store.select(selectCartTotalPrice);
  }
}
