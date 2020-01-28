import { createSelector, MemoizedSelector } from '@ngrx/store';
import { AppState, PizzaModelState, ViewModelState } from '../../app.state';
import { PizzaItem } from '../models/pizzas.model';
import { selectIsLoading, selectActiveFilter } from './viewModel.selectors';

const pizzaModel = (state: AppState) => state.pizzaModel;

const selectPizzaModelState = (state: AppState) => state.pizzaModel;
export const selectPizzalist = createSelector(selectPizzaModelState, (dataModel) => dataModel.pizzalist);
export const selectPizzacollection = createSelector(selectPizzaModelState, (dataModel) => dataModel.pizzacollection);
export const selectPizzalikes = createSelector(selectPizzaModelState, (dataModel) => dataModel.likedpizzas);

// Selector that can be used to filter the pizzalist in our saved state
export const filterPizzas = createSelector(
    pizzaModel,
    (pizzaModel: PizzaModelState, props) => {
        // get the filter, convert to all lower case
        var filter: string = (props.filter).toLowerCase();
        // apply the filter to the pizzalist in our state
        return pizzaModel.pizzalist.filter(p => p.description.toLowerCase().includes(filter) || p.name.toLowerCase().includes(filter));
    }
);

export const selectPizzaModel: MemoizedSelector<AppState, PizzaModelState> = createSelector(
    [selectPizzalist, selectPizzacollection, selectPizzalikes],
    (pizzalist, pizzacollection, likedpizzas) => ({
        pizzalist,
        pizzacollection,
        likedpizzas
    })
);