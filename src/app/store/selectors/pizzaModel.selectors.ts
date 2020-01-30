import { createSelector, MemoizedSelector } from '@ngrx/store';
import { AppState, PizzaModelState } from '../../app.state';
import { PizzaItem } from '../models/pizzas.model';

const selectPizzaModelState = (state: AppState) => state.pizzaModel;

export const selectPizzalist = createSelector(selectPizzaModelState, (dataModel) => dataModel.pizzalist);
// Add pizza count selector

export const selectPizzacollection = createSelector(selectPizzaModelState, (dataModel) => dataModel.pizzacollection);
// Add pizza collection count selector

export const selectPizzalikes = createSelector(selectPizzaModelState, (dataModel) => dataModel.likedpizzas);
// Add pizza total likes count selector

export const selectActiveFilter = createSelector(selectPizzaModelState, (dataModel) => dataModel.activeFilter);
export const selectIsLoading = createSelector(selectPizzaModelState, (dataModel) => dataModel.isLoading);


