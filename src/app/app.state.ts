import { PizzaItem } from './store/models/pizzas.model';
import { PizzaCartItem } from './store/models/pizzacart.model';

// Specifies our state
export interface AppState {
    pizzaModel: PizzaModelState;
    pizzaCart: PizzaCartState;
}

export interface PizzaModelState {
    pizzalist: PizzaItem[];
    likedpizzas: PizzaItem[];
    isLoading: boolean;
    activeFilter?: string;
}

export interface PizzaCartState {
    cartItems: PizzaCartItem[];
}
