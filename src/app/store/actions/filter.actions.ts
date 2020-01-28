import { Action } from '@ngrx/store';
import { PizzaItem } from '../models/pizzas.model';
import { PizzaModelState } from 'src/app/app.state';
import { Observable } from 'rxjs';

// Specify all the types of actions we can take
// Conventionally formatted like: '[SUBJECT(S)] <action taken>'
// NOTE: values declared here MUST be unique!
export enum ActionTypes {
    Filter = '[PIZZAS] Filter pizzas',
    FilterSuccess = '[PIZZAS] Filter pizzas success'
}

// Declare the specification of the AddToPizzaCollection action
// This action is used to filter resulter from the API
export class Filter implements Action {
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

export type Actions = Filter | FilterSuccess;