import { createSelector, MemoizedSelector } from '@ngrx/store';
import { AppState, PizzaModelState } from '../../app.state';
import { PizzaItem } from '../models/pizzas.model';
import { PizzaCartItem } from '../models/pizzacart.model';

const selectPizzaCartState = (state: AppState) => state.pizzaCart;

// TODO 3
// TODO 3a


