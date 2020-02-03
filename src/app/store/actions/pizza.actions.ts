import { Action } from '@ngrx/store';
import { PizzaItem } from '../models/pizzas.model';
import { PizzaModelState } from 'src/app/app.state';

// Specify all the types of actions we can take
// Conventionally formatted like: '[SUBJECT(S)] <action taken>'
// NOTE: values declared here MUST be unique!
export enum ActionTypes {
    AddLike = '[PIZZA] Added like',
    UpdateLikeSucess = '[PIZZA] Updated likes on server',
    RemoveLike = '[PIZZA] Removed like',
    Filter = '[PIZZAS] Filter pizzas',
    FilterSuccess = '[PIZZAS] Filter success'
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

// Declare the specification of the AddToPizzaCollection action
// This action is used to filter results from the API
export class FilterPizzas implements Action {
    readonly type = ActionTypes.Filter;

    // This action requires the user to specifiy the page, number and a filter in the payload
    constructor(public payload: { page: number, limit: number, filter: string }) { }
}

// Declare the specification of the FilterPizzasSuccess action
// This action is used when the filter has returned results successfully
export class FilterSuccess implements Action {
    readonly type = ActionTypes.FilterSuccess;

    constructor(public payload: { filter: string, data: PizzaItem[] }) { }
}

export type Actions = AddLike | UpdateLikeSuccess | RemoveLike | FilterPizzas | FilterSuccess;
