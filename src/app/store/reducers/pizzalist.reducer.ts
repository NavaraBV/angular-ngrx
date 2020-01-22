import { Action } from '@ngrx/store'
import { PizzaItem } from "../models/pizzas.model"
import * as PizzalistActions from '../actions/pizzalist.actions'

export function pizzaReducer(state: PizzaItem[] = [], action: PizzalistActions.Actions) {
    switch (action.type) {
        case PizzalistActions.ActionTypes.LoadSuccess:
            return [...state, ...action.payload];
        default:
            return state;
    }
}