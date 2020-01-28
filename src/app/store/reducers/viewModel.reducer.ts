import { Action } from '@ngrx/store';
import { createFormGroupState, updateGroup, FormGroupState, MarkAsSubmittedAction, validate, formGroupReducer } from 'ngrx-forms';
import { required, greaterThanOrEqualTo } from 'ngrx-forms/validation';
import { PizzaItem } from '../models/pizzas.model';
import { ViewModelState } from 'src/app/app.state';
import * as FilterActions from '../actions/filter.actions';
import * as PizzaActions from '../actions/pizza.actions';

export const initialModel: ViewModelState = {
    filteredItems: [],
    isLoading: false,
    activeFilter: undefined
}

export function viewModelReducer(state: ViewModelState = initialModel, action: FilterActions.Actions): ViewModelState {
    switch (action.type) {
        case FilterActions.ActionTypes.Filter:
            return {
                filteredItems: state.filteredItems,
                activeFilter: action.payload.filter,
                isLoading: true
            };
        case FilterActions.ActionTypes.FilterSuccess:
            return {
                filteredItems: action.payload.data,
                activeFilter: action.payload.filter,
                isLoading: false
            };
        default: {
            return state;
        }
    }
}
