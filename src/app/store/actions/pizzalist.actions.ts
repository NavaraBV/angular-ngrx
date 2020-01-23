import { Action } from '@ngrx/store';
import { PizzaItem } from '../models/pizzas.model';

export enum ActionTypes {
    AddToCollection = '[PIZZA] Pizza added to collection',
    RemoveFromCollection = '[PIZZA] Pizza removed from collection',
    AddLike = '[PIZZA] Added like',
    UpdateLikeSucess = '[PIZZA] Updated likes on server',
    RemoveLike = '[PIZZA] Removed like',
    LoadItems = '[PIZZAS] Load pizzas from server',
    LoadSuccess = '[PIZZAS] Load success'
}

export class AddToPizzaCollection implements Action {
    readonly type = ActionTypes.AddToCollection;

    constructor(public payload: PizzaItem) { }
}

export class RemoveFromPizzaCollection implements Action {
    readonly type = ActionTypes.RemoveFromCollection;

    constructor(public payload: PizzaItem) { }
}

export class AddLike implements Action {
    readonly type = ActionTypes.AddLike;

    constructor(public payload: PizzaItem) { }
}

export class UpdateLikeSuccess implements Action {
    readonly type = ActionTypes.UpdateLikeSucess;

    constructor(public payload: PizzaItem) { }
}

export class RemoveLike implements Action {
    readonly type = ActionTypes.RemoveLike;

    constructor(public payload: PizzaItem) { }
}

export class LoadPizzas implements Action {
    readonly type = ActionTypes.LoadItems;

    constructor(public payload: { page: number, limit: number }) { }
}

export class LoadPizzasSuccess implements Action {
    readonly type = ActionTypes.LoadSuccess;

    constructor(public payload: PizzaItem[]) { }
}



export type Actions = AddToPizzaCollection | RemoveFromPizzaCollection | AddLike | UpdateLikeSuccess | RemoveLike | LoadPizzas | LoadPizzasSuccess;