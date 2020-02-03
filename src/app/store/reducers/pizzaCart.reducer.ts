import * as PizzaCartActions from '../actions/pizzacart.actions';
import { PizzaCartState } from 'src/app/app.state';
import { PizzaCartItem } from '../models/pizzacart.model';

export const initialModel: PizzaCartState = {
    cartItems: []
};

// The reducer that is used for changing pizza cart in our state
export function pizzaCartReducer(
    state: PizzaCartState = initialModel,
    action: PizzaCartActions.Actions
): PizzaCartState {

    let cartIndex = 0;

    switch (action.type) {
        case PizzaCartActions.ActionTypes.AddToCart:
            // Make a new pizza cart item
            const newItem: PizzaCartItem = {
                pizzaItem: action.payload,
                amount: 1
            };
            return {
                // Take the current state as the base
                ...state,
                // Assemble new list with the new item at the end
                cartItems: [...state.cartItems, newItem]
            };
        case PizzaCartActions.ActionTypes.RemoveFromCart:
            cartIndex = state.cartItems.findIndex(
                p => p.pizzaItem.id === action.payload.id
            );
            return {
                // Take the current state as the base
                ...state,
                // Assemble new list with the specified item removed
                cartItems: [
                    ...state.cartItems.slice(0, cartIndex),
                    ...state.cartItems.slice(cartIndex + 1)
                ]
            };
        case PizzaCartActions.ActionTypes.IncreaseCartAmount:
            // Find the correct cart item
            cartIndex = state.cartItems.findIndex(
                p => p.pizzaItem.id === action.payload.pizzaItem.id
            );

            // Create a new item entry
            const increasedItem: PizzaCartItem = {
                pizzaItem: action.payload.pizzaItem,
                amount: action.payload.amount + 1
            };

            return {
                // Take the current state as the base
                ...state,
                // Assemble new list with the increased item inserted
                cartItems: [
                    ...state.cartItems.slice(0, cartIndex),
                    increasedItem,
                    ...state.cartItems.slice(cartIndex + 1)
                ]
            };
        case PizzaCartActions.ActionTypes.DecreaseCartAmount:
            // Find the correct cart item
            cartIndex = state.cartItems.findIndex(
                p => p.pizzaItem.id === action.payload.pizzaItem.id
            );

            // Create a new item entry
            const decreasedItem: PizzaCartItem = {
                pizzaItem: action.payload.pizzaItem,
                amount: action.payload.amount - 1
            };

            return {
                // Take the current state as the base
                ...state,
                // Assemble new list with the decreased item inserted
                cartItems: [
                    ...state.cartItems.slice(0, cartIndex),
                    decreasedItem,
                    ...state.cartItems.slice(cartIndex + 1)
                ]
            };
        default:
            // Do nothing, just return the state
            return state;
    }
}
