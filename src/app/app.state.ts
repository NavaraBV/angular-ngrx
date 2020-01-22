import { PizzaItem } from './store/models/pizzas.model'

export interface AppState {
    readonly pizzalist: PizzaItem[]
    readonly pizzacollection: PizzaItem[]
}