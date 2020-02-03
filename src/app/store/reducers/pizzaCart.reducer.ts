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

    switch (action.type) {
        // TODO 1
        // TODO 1a
        // TODO 1b
        default:
            // Do nothing, just return the state
            return state;
    }
}
