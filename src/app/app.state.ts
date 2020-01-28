import { PizzaItem } from './store/models/pizzas.model'
import { FormGroupState } from 'ngrx-forms';

// Specifies our state
export interface AppState {
    pizzaModel: PizzaModelState,
    viewModel: ViewModelState,
    formModel: FormGroupState<PizzaItem>
}

export interface PizzaModelState {
    pizzalist: PizzaItem[],
    pizzacollection: PizzaItem[],
    likedpizzas: PizzaItem[]
}

export interface ViewModelState {
    filteredItems: PizzaItem[],
    isLoading: boolean,
    activeFilter?: string
}