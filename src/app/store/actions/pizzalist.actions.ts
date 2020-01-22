import { Action } from '@ngrx/store';
import { PizzaItem } from '../models/pizzas.model';

export enum ActionTypes {
    Add = '[PIZZA] Add to collection',
    Remove = '[PIZZA] Remove from collection',
    LoadItems = '[PIZZAS] Load pizzas from server',
    LoadSuccess = '[PIZZAS] Load success'
}

export class AddPizza implements Action {
    readonly type = ActionTypes.Add;

    constructor(public payload: PizzaItem) { }
}

export class RemovePizza implements Action {
    readonly type = ActionTypes.Remove;

    constructor(public payload: number) { }
}

export class LoadPizzas implements Action {
    readonly type = ActionTypes.LoadItems;

    constructor(public payload: { page: number, limit: number }) { }
}

export class LoadPizzasSuccess implements Action {
    readonly type = ActionTypes.LoadSuccess;

    constructor(public payload: PizzaItem[]) { }
}



export type Actions = AddPizza | RemovePizza | LoadPizzas | LoadPizzasSuccess;