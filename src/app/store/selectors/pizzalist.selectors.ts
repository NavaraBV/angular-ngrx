import { createSelector } from '@ngrx/store';
import { AppState } from '../../app.state';
import { PizzaItem } from '../models/pizzas.model';

const pizzalist = (state: AppState) => state.pizzalist;

export const filterPizzas = createSelector(
    pizzalist,
    (pizzalist: PizzaItem[], props) => {
        console.log("test");
        var filter : string = (props.filter).toLowerCase();
        pizzalist = pizzalist.filter(p => p.description.toLowerCase().includes(filter) || p.name.toLowerCase().includes(filter));
        return pizzalist;
    }
);