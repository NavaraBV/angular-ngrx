import { Action } from '@ngrx/store';
import { PizzaItem } from '../models/pizzas.model';

// Specify all the types of actions we can take
// Conventionally formatted like: '[SUBJECT(S)] <action taken>'
// NOTE: values declared here MUST be unique!
export enum ActionTypes {
    AddToCollection = '[PIZZA] Pizza added to collection',
    RemoveFromCollection = '[PIZZA] Pizza removed from collection',
    AddLike = '[PIZZA] Added like',
    UpdateLikeSucess = '[PIZZA] Updated likes on server',
    RemoveLike = '[PIZZA] Removed like',
    LoadPizzas = '[PIZZAS] Load pizzas from server',
    LoadSuccess = '[PIZZAS] Load success',
    Filter = '[PIZZAS] Filter pizzas',
    FilterSuccess = '[PIZZAS] Filter success'
}

// Declare the specifications of the AddToPizzaCollection action
// This action is used to add a pizza to our pizzacollection
export class AddToPizzaCollection implements Action {
    readonly type = ActionTypes.AddToCollection;

    constructor(public payload: PizzaItem) { }
}

// Declare the specifications of the RemoveFromPizzaCollection action
// This action is used to remove a pizza from our pizzacollection
export class RemoveFromPizzaCollection implements Action {
    readonly type = ActionTypes.RemoveFromCollection;

    constructor(public payload: PizzaItem) { }
}

// Declare the specifications of the AddLike action
// This action is used to add a like to a pizza
export class AddLike implements Action {
    readonly type = ActionTypes.AddLike;

    constructor(public payload: PizzaItem) { }
}

// Declare the specifications of the UpdateLikeSuccess action
// This action is used after the likes have been successfully updated on the server
export class UpdateLikeSuccess implements Action {
    readonly type = ActionTypes.UpdateLikeSucess;

    constructor(public payload: PizzaItem) { }
}

// Declare the specifications of the RemoveLike action
// This action is used to remove a pizza from our likedpizzas
export class RemoveLike implements Action {
    readonly type = ActionTypes.RemoveLike;

    constructor(public payload: PizzaItem) { }
}

// Declare the specifications of the LoadPizzas action
// This action is used when loading a new page of pizzas from the server
export class LoadPizzas implements Action {
    readonly type = ActionTypes.LoadPizzas;

    // This action requires the user to specifiy the page and number in the payload
    constructor(public payload: { page: number, limit: number }) { }
}

// Declare the specification of the LoadPizzasSuccess action
// This action is used when pizzas have been successfully loaded from the server
export class LoadPizzasSuccess implements Action {
    readonly type = ActionTypes.LoadSuccess;

    constructor(public payload: PizzaItem[]) { }
}

// Declare the specification of the AddToPizzaCollection action
// This action is used to filter resulter from the API
export class FilterPizzas implements Action {
    readonly type = ActionTypes.Filter;

    // This action requires the user to specifiy the page, number and a filter in the payload
    constructor(public payload: { page: number, limit: number, filter: string }) { }
}

// Declare the specification of the FilterPizzasSuccess action
// This action is used when the filter has returned results successfully
export class FilterPizzasSuccess implements Action {
    readonly type = ActionTypes.FilterSuccess;

    constructor(public payload: PizzaItem[]) { }
}

export type Actions = AddToPizzaCollection | RemoveFromPizzaCollection | AddLike | UpdateLikeSuccess | RemoveLike | LoadPizzas | LoadPizzasSuccess | FilterPizzas | FilterPizzasSuccess;