import { createSelector } from '@ngrx/store';
import { AppState } from '../../app.state';
import { PizzaItem } from '../models/pizzas.model';

const pizzalist = (state: AppState) => state.pizzalist;

export const selectFirstPizza = createSelector(
    pizzalist,
    (pizzalist: PizzaItem[]) => pizzalist[0]
);