import { Injectable } from "@angular/core";
import { Effect, ofType, Actions } from '@ngrx/effects';
import * as PizzaActions from '../actions/pizza.actions'
import { map, withLatestFrom, switchMap, mergeMap, catchError } from 'rxjs/operators';
import { AppState } from 'src/app/app.state';
import { Store } from '@ngrx/store';
import { PizzasService } from 'src/app/services/pizzas.service';
import { EMPTY } from 'rxjs';

@Injectable()
// This class specifies all the effects that are called when using actions related to pizzas
export class PizzaEffects {

    constructor(
        private actions: Actions,
        private pizzaService: PizzasService
    ) { }

    // Specifies the effect that is triggered when new pizzas are loaded
    @Effect()
    loadPizzas = this.actions.pipe(
        // Specifies the type of action we listen for
        ofType(PizzaActions.ActionTypes.LoadPizzas),
        mergeMap(({ payload: { page, limit } }) =>
            // Make a call to the pizzaService to give us a list of pizzas based on the given page and limit
            this.pizzaService.getAll(page, limit).pipe(
                map(data => {
                    // Return the load success action type
                    return { type: PizzaActions.ActionTypes.LoadSuccess, payload: data };
                }),
                catchError(() => EMPTY)
            )
        )
    );

    // Specifies the effect that is triggered when pizzas are filtered
    @Effect()
    filterPizzas = this.actions.pipe(
        // Specifies the type of action we listen for
        ofType(PizzaActions.ActionTypes.Filter),
        mergeMap(({ payload: { page, limit, filter } }) =>
            // Make a call to the pizzaService to give us a list of pizzas based on the given page, limit and filter
            this.pizzaService.getAllFiltered(page, limit, filter).pipe(
                map(data => {
                    // Return the filter success action type
                    return { type: PizzaActions.ActionTypes.FilterSuccess, payload: data };
                }),
                catchError(() => EMPTY)
            )
        )
    );

    // Specifies the effect that is triggered when pizzas are liked
    @Effect()
    addLike = this.actions.pipe(
        // Specifies the types of the actions we listen for
        ofType<PizzaActions.AddLike | PizzaActions.RemoveLike>(PizzaActions.ActionTypes.AddLike, PizzaActions.ActionTypes.RemoveLike),
        map(action => {
            // Make a call to the pizzaService to change the amount of likes a pizza has
            this.pizzaService.putLike(action.payload.id, action.payload.likes).pipe(
                map(products => {
                    return new PizzaActions.UpdateLikeSuccess(action.payload);
                }),
                catchError(() => EMPTY)
            ).subscribe()

            return new PizzaActions.UpdateLikeSuccess(action.payload);
        })
    )
}