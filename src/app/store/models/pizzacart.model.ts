import { PizzaItem } from './pizzas.model';

// Specifies the data model of a Pizza Cart Item
export interface PizzaCartItem {
    pizzaItem: PizzaItem;
    amount: number;
}
