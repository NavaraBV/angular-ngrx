import { Injectable } from "@angular/core";
import { Effect, ofType, Actions } from '@ngrx/effects';
import * as PizzalistActions from '../actions/pizzalist.actions'
import { map, withLatestFrom, switchMap, mergeMap, catchError } from 'rxjs/operators';
import { AppState } from 'src/app/app.state';
import { Store } from '@ngrx/store';
import { PizzasService } from 'src/app/services/pizzas.service';
import { EMPTY } from 'rxjs';

@Injectable()
export class PizzaListEffects {

    constructor(
        private actions: Actions,
        private pizzaService: PizzasService
    ) { }

    @Effect()
    loadProducts$ = this.actions.pipe(
        ofType(PizzalistActions.ActionTypes.LoadItems),
        mergeMap(({ payload: { page, limit } }) =>
            this.pizzaService.getAll(page, limit).pipe(
                map(products => {
                    return { type: PizzalistActions.ActionTypes.LoadSuccess, payload: products };
                }),
                catchError(() => EMPTY)
            )
        )
    );
}