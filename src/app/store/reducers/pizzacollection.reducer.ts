import { PizzaItem } from "../models/pizzas.model"
import * as PizzalistActions from '../actions/pizza.actions'

// The reducer that is used for changing pizzacollection in our state
export function pizzaCollectionReducer(state: PizzaItem[] = [], action: PizzalistActions.Actions) {
    switch (action.type) {
        case PizzalistActions.ActionTypes.AddToCollection:
            // Add a new pizza to pizzacollection in our state
            return [...state, action.payload];
        case PizzalistActions.ActionTypes.RemoveFromCollection:
            // Try to find the pizza in pizzacollection
            const index = state.findIndex(p => p.id == action.payload.id);
            if (index >= 0)
                // Remove the pizza from pizzacollection in our state
                state.splice(index, 1);
            return state;
        default:
            // Do nothing, just return the state
            return state;
    }
}