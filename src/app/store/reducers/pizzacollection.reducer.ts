import { Action } from '@ngrx/store'
import { PizzaItem } from "../models/pizzas.model"
import * as PizzalistActions from '../actions/pizzalist.actions'

export function pizzaCollectionReducer(state: PizzaItem[] = [], action: PizzalistActions.Actions) {
    switch (action.type) {
        case PizzalistActions.ActionTypes.Add:
            return [...state, action.payload];
        case PizzalistActions.ActionTypes.Remove:
            state.splice(action.payload, 1);
            return state;
        default:
            return state;
    }
}