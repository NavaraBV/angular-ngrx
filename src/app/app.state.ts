import { PizzaItem } from './store/models/pizzas.model'

// Specifies our state
export interface AppState {
    readonly pizzalist: PizzaItem[]
    readonly pizzacollection: PizzaItem[]
    readonly likedpizzas: PizzaItem[]
}