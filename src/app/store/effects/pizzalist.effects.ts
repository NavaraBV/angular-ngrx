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
    loadPizzas = this.actions.pipe(
        ofType(PizzalistActions.ActionTypes.LoadItems),
        mergeMap(({ payload: { page, limit } }) =>
            this.pizzaService.getAll(page, limit).pipe(
                map(data => {
                    return { type: PizzalistActions.ActionTypes.LoadSuccess, payload: data };
                }),
                catchError(() => EMPTY)
            )
        )
    );

    @Effect()
    filterPizzas = this.actions.pipe(
        ofType(PizzalistActions.ActionTypes.Filter),
        mergeMap(({ payload: { page, limit, filter } }) =>
            this.pizzaService.getAllFiltered(page, limit, filter).pipe(
                map(data => {
                    return { type: PizzalistActions.ActionTypes.FilterSuccess, payload: data };
                }),
                catchError(() => EMPTY)
            )
        )
    );

    @Effect()
    addLike = this.actions.pipe(
        ofType<PizzalistActions.AddLike | PizzalistActions.RemoveLike>(PizzalistActions.ActionTypes.AddLike, PizzalistActions.ActionTypes.RemoveLike),
        map(action => {
            this.pizzaService.putLike(action.payload.id, action.payload.likes).pipe(
                map(products => {
                    return new PizzalistActions.UpdateLikeSuccess(action.payload);
                }),
                catchError(() => EMPTY)
            ).subscribe()

            return new PizzalistActions.UpdateLikeSuccess(action.payload);
        })
    )
}