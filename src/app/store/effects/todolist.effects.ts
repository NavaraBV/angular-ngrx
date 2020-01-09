import { Injectable } from "@angular/core";
import { Effect, ofType, Actions } from '@ngrx/effects';
import * as TodolistActions from '../actions/todolist.actions'
import { map, withLatestFrom, switchMap } from 'rxjs/operators';
import { AppState } from 'src/app/app.state';
import { Store } from '@ngrx/store';

@Injectable()
export class TodolistEffects {
    @Effect()
    addTodo = this.actions.pipe(
        ofType<TodolistActions.AddTodoItem>(TodolistActions.ADD_TODO),
        map(action => {
            console.log("EFFECT TRIGGERED\nNew to-do item created: \n");
            console.log(action.payload);
            return new TodolistActions.AddTodoItemSuccess(action.payload);
        }),

    )
    constructor(
        private actions: Actions
    ) {

    }
}