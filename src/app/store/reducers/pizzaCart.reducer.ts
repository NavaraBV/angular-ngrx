import * as PizzaCartActions from '../actions/pizzacart.actions';
import { PizzaCartState } from 'src/app/app.state';
import { PizzaCartItem } from '../models/pizzacart.model';

export const initialModel: PizzaCartState = {
    cartItems: []
};

// The reducer that is used for changing pizzalist in our state
export function pizzaCartReducer(
    state: PizzaCartState = initialModel,
    action: PizzaCartActions.Actions
): PizzaCartState {

    let cartIndex = 0;

    switch (action.type) {
        case PizzaCartActions.ActionTypes.AddToCart:
            const newItem: PizzaCartItem = {
                pizzaItem: action.payload,
                amount: 1
            };
            return {
                ...state,
                cartItems: [...state.cartItems, newItem]
            };
        case PizzaCartActions.ActionTypes.RemoveFromCart:
            cartIndex = state.cartItems.findIndex(
                p => p.pizzaItem.id === action.payload.id
            );
            return {
                ...state,
                cartItems: [
                    ...state.cartItems.slice(0, cartIndex),
                    ...state.cartItems.slice(cartIndex + 1)
                ]
            };
        case PizzaCartActions.ActionTypes.IncreaseCartAmount:
            cartIndex = state.cartItems.findIndex(
                p => p.pizzaItem.id === action.payload.pizzaItem.id
            );

            const increasedItem: PizzaCartItem = {
                pizzaItem: action.payload.pizzaItem,
                amount: action.payload.amount + 1
            };

            return {
                ...state,
                cartItems: [
                    ...state.cartItems.slice(0, cartIndex),
                    increasedItem,
                    ...state.cartItems.slice(cartIndex + 1)
                ]
            };
        case PizzaCartActions.ActionTypes.DecreaseCartAmount:
            cartIndex = state.cartItems.findIndex(
                p => p.pizzaItem.id === action.payload.pizzaItem.id
            );

            const decreasedItem: PizzaCartItem = {
                pizzaItem: action.payload.pizzaItem,
                amount: action.payload.amount - 1
            };

            return {
                ...state,
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
