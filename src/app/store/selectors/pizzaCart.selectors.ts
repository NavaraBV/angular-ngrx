import { createSelector, MemoizedSelector } from '@ngrx/store';
import { AppState, PizzaModelState } from '../../app.state';
import { PizzaItem } from '../models/pizzas.model';
import { PizzaCartItem } from '../models/pizzacart.model';

const selectPizzaCartState = (state: AppState) => state.pizzaCart;

export const selectCartCount = createSelector(selectPizzaCartState, (dataModel) => dataModel.cartItems.length);
const priceReducer = (accumulator: number, currentValue: PizzaCartItem) =>
    accumulator + (currentValue.pizzaItem.price * currentValue.amount);
export const selectCartTotalPrice = createSelector(selectPizzaCartState, (dataModel) => dataModel.cartItems.reduce(priceReducer, 0));


