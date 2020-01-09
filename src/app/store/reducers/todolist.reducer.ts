import { Action } from '@ngrx/store'
import { TodoItem } from "../models/todolist.model"
import * as TodolistActions from '../actions/todolist.actions'

const initialState: TodoItem = {
    title: 'Initial Item',
    description: 'lorem ipsum'
}

export function reducer(state: TodoItem[] = [initialState], action: TodolistActions.Actions) {
    switch (action.type) {
        case TodolistActions.ADD_TODO:
            return [...state, action.payload];
        case TodolistActions.REMOVE_TODO:
            state.splice(action.payload, 1);
            return state;
        default:
            return state;
    }
}