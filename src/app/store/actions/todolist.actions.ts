import { Action } from '@ngrx/store';
import { TodoItem } from '../models/todolist.model';

export const ADD_TODO = '[TODO] Add';
export const ADD_TODO_SUCCESS = '[TODO] Add Success';
export const REMOVE_TODO = '[TODO] Remove';

export class AddTodoItem implements Action {
    readonly type = ADD_TODO;

    constructor(public payload: TodoItem) { }
}

export class AddTodoItemSuccess implements Action {
    readonly type = ADD_TODO_SUCCESS;

    constructor(public payload: TodoItem) { }
}

export class RemoveTodoItem implements Action {
    readonly type = REMOVE_TODO;

    constructor(public payload: number) { }
}

export type Actions = AddTodoItem | RemoveTodoItem