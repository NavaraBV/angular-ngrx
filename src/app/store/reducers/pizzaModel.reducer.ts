import * as PizzaModelActions from '../actions/pizza.actions'
import { PizzaModelState } from 'src/app/app.state';
import { PizzaItem, emptyPizzaItem } from '../models/pizzas.model';

export const initialModel: PizzaModelState = {
    pizzalist: [],
    pizzacollection: [],
    likedpizzas: [],
    activeFilter: undefined,
    isLoading: false
}

// The reducer that is used for changing pizzalist in our state
export function pizzaModelReducer(state: PizzaModelState = initialModel, action: PizzaModelActions.Actions): PizzaModelState {

    let pizzalist_index = 0, likedpizzas_index = 0, pizzacollection_index = 0;

    switch (action.type) {
        /* -------------------- LIKING PIZZAS -------------------- */
        case PizzaModelActions.ActionTypes.AddLike:
            // Try to find the pizza in pizzalist
            pizzalist_index = state.pizzalist.findIndex(p => p.id == action.payload.id);

            // Very important to assign a new object and modify that. We cannot have side-effects modifying the state directly!
            var pizzaItem: PizzaItem = emptyPizzaItem;
            Object.assign(pizzaItem, state.pizzalist[pizzalist_index]);
            pizzaItem.likes++;

            return {
                // Very important to assemble a new list, we cannot have side-effects modifying the state directly!
                // Must also insert a newly assigned object into the array instead of the direct reference: no side effects!
                pizzalist: [...state.pizzalist.slice(0, pizzalist_index), Object.assign({}, pizzaItem), ...state.pizzalist.slice(pizzalist_index + 1)],
                pizzacollection: state.pizzacollection,
                // Very important to assemble a new list, we cannot have side-effects modifying the state directly!
                likedpizzas: [...state.likedpizzas, action.payload],
                activeFilter: state.activeFilter,
                isLoading: state.isLoading
            };
        case PizzaModelActions.ActionTypes.RemoveLike:
            // Try to find the pizza in pizzalist
            pizzalist_index = state.pizzalist.findIndex(p => p.id == action.payload.id);
            likedpizzas_index = state.likedpizzas.findIndex(p => p.id == action.payload.id);

            // Very important to assign a new object and modify that. We cannot have side-effects modifying the state directly!
            var pizzaItem: PizzaItem = emptyPizzaItem;
            Object.assign(pizzaItem, state.pizzalist[pizzalist_index]);
            pizzaItem.likes--;

            return {
                // Very important to assemble a new list, we cannot have side-effects modifying the state directly!
                // Must also insert a newly assigned object into the array instead of the direct reference: no side effects!
                pizzalist: [...state.pizzalist.slice(0, pizzalist_index), Object.assign({}, pizzaItem), ...state.pizzalist.slice(pizzalist_index + 1)],
                pizzacollection: state.pizzacollection,
                // Very important to assemble a new list, we cannot have side-effects modifying the state directly!
                likedpizzas: [...state.likedpizzas.slice(0, likedpizzas_index), ...state.likedpizzas.slice(likedpizzas_index + 1)],
                activeFilter: state.activeFilter,
                isLoading: state.isLoading
            };

        /* -------------------- COLLECTING PIZZAS -------------------- */
        case PizzaModelActions.ActionTypes.AddToCollection:
            // Add a new pizza to pizzacollection in our state
            return {
                pizzalist: state.pizzalist,
                // Very important to assemble a new list, we cannot have side-effects modifying the state directly!
                pizzacollection: [...state.pizzacollection, action.payload],
                likedpizzas: state.likedpizzas,
                activeFilter: state.activeFilter,
                isLoading: state.isLoading
            };
        case PizzaModelActions.ActionTypes.RemoveFromCollection:
            // Try to find the pizza in pizzacollection
            pizzacollection_index = state.pizzacollection.findIndex(p => p.id == action.payload.id);

            return {
                pizzalist: state.pizzalist,
                // Very important to assemble a new list, we cannot have side-effects modifying the state directly!
                pizzacollection: [...state.pizzacollection.slice(0, pizzacollection_index), ...state.pizzacollection.slice(pizzacollection_index + 1)],
                likedpizzas: state.likedpizzas,
                activeFilter: state.activeFilter,
                isLoading: state.isLoading
            };

        /* -------------------- LOADING PIZZAS -------------------- */
        case PizzaModelActions.ActionTypes.Filter:
            // Add the list of results to the current pizzalist in our state
            return {
                pizzalist: state.pizzalist,
                pizzacollection: state.pizzacollection,
                likedpizzas: state.likedpizzas,
                activeFilter: action.payload.filter,
                isLoading: true
            };
        case PizzaModelActions.ActionTypes.FilterSuccess:
            // Add the list of results to the current pizzalist in our state
            return {
                pizzalist: [...action.payload.data],
                pizzacollection: state.pizzacollection,
                likedpizzas: state.likedpizzas,
                activeFilter: state.activeFilter,
                isLoading: false
            };
        default:
            // Do nothing, just return the state
            return state;
    }
}