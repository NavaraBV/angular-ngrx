import { Action } from '@ngrx/store'
import { PizzaItem } from "../models/pizzas.model"
import * as PizzalistActions from '../actions/pizzalist.actions'

export function pizzaReducer(state: PizzaItem[] = [], action: PizzalistActions.Actions) {
    switch (action.type) {
        case PizzalistActions.ActionTypes.AddLike:
            var index = state.findIndex(p => p.id == action.payload.id);
            if (index >= 0)
                state[index].likes++;
            return state;
        case PizzalistActions.ActionTypes.RemoveLike:
            index = state.findIndex(p => p.id == action.payload.id);
            if (index >= 0)
                state[index].likes--;
            return state;
        case PizzalistActions.ActionTypes.LoadSuccess:
            return [...state, ...action.payload];
        case PizzalistActions.ActionTypes.FilterSuccess:
            return action.payload;
        default:
            return state;
    }
}