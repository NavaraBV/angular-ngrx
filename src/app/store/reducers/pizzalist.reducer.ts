import { Action } from '@ngrx/store'
import { PizzaItem } from "../models/pizzas.model"
import * as PizzalistActions from '../actions/pizza.actions'

// The reducer that is used for changing pizzalist in our state
export function pizzaReducer(state: PizzaItem[] = [], action: PizzalistActions.Actions) {
    switch (action.type) {
        case PizzalistActions.ActionTypes.AddLike:
            // Try to find the pizza in pizzalist
            var index = state.findIndex(p => p.id == action.payload.id);
            if (index >= 0)
                // Add a like to the pizza in our state
                state[index].likes++;
            return state;
        case PizzalistActions.ActionTypes.RemoveLike:
            // Try to find the pizza in pizzalist
            index = state.findIndex(p => p.id == action.payload.id);
            if (index >= 0)
                // Remove a like from the pizza in our state
                state[index].likes--;
            return state;
        case PizzalistActions.ActionTypes.LoadSuccess:
            // Add the list of results to the current pizzalist in our state
            return [...state, ...action.payload];
        case PizzalistActions.ActionTypes.FilterSuccess:
            // Change the pizzalist in our state to the result of our filter
            return action.payload;
        default:
            // Do nothing, just return the state
            return state;
    }
}