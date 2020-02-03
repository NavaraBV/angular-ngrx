import * as PizzaModelActions from '../actions/pizza.actions';
import { PizzaModelState } from 'src/app/app.state';
import { PizzaItem, emptyPizzaItem } from '../models/pizzas.model';

export const initialModel: PizzaModelState = {
    pizzalist: [],
    likedpizzas: [],
    activeFilter: undefined,
    isLoading: false
};

// The reducer that is used for changing pizzalist in our state
export function pizzaModelReducer(
    state: PizzaModelState = initialModel,
    action: PizzaModelActions.Actions
): PizzaModelState {
    let pizzalistIndex = 0;
    let likedpizzasIndex = 0;
    let newPizza: PizzaItem;

    switch (action.type) {
        /* -------------------- LIKING PIZZAS -------------------- */
        case PizzaModelActions.ActionTypes.AddLike:
            // Try to find the pizza in pizzalist
            pizzalistIndex = state.pizzalist.findIndex(
                p => p.id === action.payload.id
            );

            // Very important to assign a new object and modify that. We cannot have side-effects modifying the state directly!
            newPizza = {
                ...action.payload,
                likes: action.payload.likes + 1
            };

            return {
                ...state,
                // Very important to assemble a new list, we cannot have side-effects modifying the state directly!
                // Must also insert a newly assigned object into the array instead of the direct reference: no side effects!
                pizzalist: [
                    ...state.pizzalist.slice(0, pizzalistIndex),
                    newPizza,
                    ...state.pizzalist.slice(pizzalistIndex + 1)
                ],
                // Very important to assemble a new list, we cannot have side-effects modifying the state directly!
                likedpizzas: [...state.likedpizzas, action.payload],
            };
        case PizzaModelActions.ActionTypes.RemoveLike:
            // Try to find the pizza in pizzalist
            pizzalistIndex = state.pizzalist.findIndex(
                p => p.id === action.payload.id
            );
            likedpizzasIndex = state.likedpizzas.findIndex(
                p => p.id === action.payload.id
            );

            // Very important to assign a new object and modify that. We cannot have side-effects modifying the state directly!
            newPizza = {
                ...action.payload,
                likes: action.payload.likes - 1
            };

            return {
                ...state,
                // Very important to assemble a new list, we cannot have side-effects modifying the state directly!
                // Must also insert a newly assigned object into the array instead of the direct reference: no side effects!
                pizzalist: [
                    ...state.pizzalist.slice(0, pizzalistIndex),
                    newPizza,
                    ...state.pizzalist.slice(pizzalistIndex + 1)
                ],
                // Very important to assemble a new list, we cannot have side-effects modifying the state directly!
                likedpizzas: [
                    ...state.likedpizzas.slice(0, likedpizzasIndex),
                    ...state.likedpizzas.slice(likedpizzasIndex + 1)
                ],
            };
        /* -------------------- LOADING PIZZAS -------------------- */
        case PizzaModelActions.ActionTypes.Filter:
            // Add the list of results to the current pizzalist in our state
            return {
                ...state,
                isLoading: true
            };
        case PizzaModelActions.ActionTypes.FilterSuccess:
            // Add the list of results to the current pizzalist in our state
            return {
                ...state,
                pizzalist: [...action.payload.data],
                isLoading: false
            };
        default:
            // Do nothing, just return the state
            return state;
    }
}
