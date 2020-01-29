import * as PizzaModelActions from '../actions/pizza.actions'
import { PizzaModelState } from 'src/app/app.state';

export const initialModel: PizzaModelState = {
    pizzalist: [],
    pizzacollection: [],
    likedpizzas: [],
    activeFilter: undefined,
    isLoading: false
}

// The reducer that is used for changing pizzalist in our state
export function pizzaModelReducer(state: PizzaModelState = initialModel, action: PizzaModelActions.Actions): PizzaModelState {
    switch (action.type) {
        /* -------------------- LIKING PIZZAS -------------------- */
        case PizzaModelActions.ActionTypes.AddLike:
            console.log("Add Like");
            // Try to find the pizza in pizzalist
            var i = state.pizzalist.findIndex(p => p.id == action.payload.id);
            var pizzalist = state.pizzalist;
            if (i >= 0)
                // Add a like to the pizza in our state
                pizzalist[i].likes++;

            state.likedpizzas.push(action.payload);

            return {
                pizzalist: pizzalist,
                pizzacollection: state.pizzacollection,
                likedpizzas: state.likedpizzas,
                activeFilter: state.activeFilter,
                isLoading: state.isLoading
            };
        case PizzaModelActions.ActionTypes.RemoveLike:
            // Try to find the pizza in pizzalist
            var likedpizzas_index = state.likedpizzas.findIndex(p => p.id == action.payload.id);
            var pizzalist_index = state.pizzalist.findIndex(p => p.id == action.payload.id);

            if (pizzalist_index >= 0)
                // Remove a like from the pizza in our state
                state.pizzalist[pizzalist_index].likes--;

            if (likedpizzas_index >= 0)
                // Remove a pizza from our likedpizzas list
                state.likedpizzas.splice(likedpizzas_index, 1);

            return {
                pizzalist: state.pizzalist,
                pizzacollection: state.pizzacollection,
                likedpizzas: state.likedpizzas,
                activeFilter: state.activeFilter,
                isLoading: state.isLoading
            };

        /* -------------------- COLLECTING PIZZAS -------------------- */
            // Code here

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
                pizzalist: action.payload.data,
                pizzacollection: state.pizzacollection,
                likedpizzas: state.likedpizzas,
                activeFilter: state.activeFilter,
                isLoading: state.isLoading
            };
        default:
            // Do nothing, just return the state
            return state;
    }
}