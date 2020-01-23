import { PizzaItem } from "../models/pizzas.model"
import * as PizzalistActions from '../actions/pizza.actions'

// The reducer that is used for changing likedpizzas in our state
export function likedPizzasReducer(state: PizzaItem[] = [], action: PizzalistActions.Actions) {
    switch (action.type) {
        case PizzalistActions.ActionTypes.AddLike:
            // Add the liked pizza to likedpizzas in our state
            return [...state, action.payload];
        case PizzalistActions.ActionTypes.RemoveLike:
            // Try to find the pizza in our likedpizzas
            const index = state.findIndex(p => p.id == action.payload.id);
            if (index >= 0)
                // Remove the pizza from likedpizzas in our state
                state.splice(index, 1);
            return state;
        default:
            // Do nothing, just return the state
            return state;
    }
}