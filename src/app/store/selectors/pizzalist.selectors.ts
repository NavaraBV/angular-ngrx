import { createSelector } from '@ngrx/store';
import { AppState } from '../../app.state';
import { PizzaItem } from '../models/pizzas.model';

const pizzalist = (state: AppState) => state.pizzalist;

// Selector that can be used to filter the pizzalist in our saved state
export const filterPizzas = createSelector(
    pizzalist,
    (pizzalist: PizzaItem[], props) => {
        // get the filter, convert to all lower case
        var filter : string = (props.filter).toLowerCase();
        // apply the filter to the pizzalist in our state
        pizzalist = pizzalist.filter(p => p.description.toLowerCase().includes(filter) || p.name.toLowerCase().includes(filter));
        return pizzalist;
    }
);