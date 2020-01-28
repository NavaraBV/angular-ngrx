import { PizzaItem } from './store/models/pizzas.model'
import { FormGroupState } from 'ngrx-forms';

// Specifies our state
export interface AppState {
    pizzaModel: PizzaModelState,
    formModel: FormGroupState<PizzaItem>
}

export interface PizzaModelState {
    pizzalist: PizzaItem[],
    pizzacollection: PizzaItem[],
    likedpizzas: PizzaItem[],
    isLoading: boolean,
    activeFilter?: string
}