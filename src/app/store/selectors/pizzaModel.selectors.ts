import { createSelector, MemoizedSelector } from '@ngrx/store';
import { AppState, PizzaModelState } from '../../app.state';
import { PizzaItem } from '../models/pizzas.model';

const selectPizzaModelState = (state: AppState) => state.pizzaModel;

export const selectPizzalist = createSelector(selectPizzaModelState, (dataModel) => dataModel.pizzalist);
export const selectPizzaCount = createSelector(selectPizzaModelState, (dataModel) => dataModel.pizzalist.length);

export const selectPizzalikes = createSelector(selectPizzaModelState, (dataModel) => dataModel.likedpizzas);
const likeReducer = (accumulator: number, currentValue: PizzaItem) => accumulator + currentValue.likes;
export const selectTotalPizzaLikes = createSelector(selectPizzaModelState, (dataModel) => dataModel.pizzalist.reduce(likeReducer, 0));

export const selectActiveFilter = createSelector(selectPizzaModelState, (dataModel) => dataModel.activeFilter);
export const selectIsLoading = createSelector(selectPizzaModelState, (dataModel) => dataModel.isLoading);


