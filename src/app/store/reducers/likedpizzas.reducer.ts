import { PizzaItem } from "../models/pizzas.model"
import * as PizzalistActions from '../actions/pizzalist.actions'

export function likedPizzasReducer(state: PizzaItem[] = [], action: PizzalistActions.Actions) {
    switch (action.type) {
        case PizzalistActions.ActionTypes.AddLike:
            return [...state, action.payload];
        case PizzalistActions.ActionTypes.RemoveLike:
            const index = state.findIndex(p => p.id == action.payload.id);
            if (index >= 0)
                state.splice(index, 1);
            return state;
        default:
            return state;
    }
}