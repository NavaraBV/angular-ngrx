import { createSelector } from '@ngrx/store';
import { AppState } from '../../app.state';
import { TodoItem } from '../models/todolist.model';

const todolist = (state: AppState) => state.todolist;

export const selectFirstTodo = createSelector(
    todolist,
    (todolist: TodoItem[]) => todolist[0]
);

export const selectLastTodo = createSelector(
    todolist,
    (todolist: TodoItem[]) => todolist[todolist.length - 1]
);