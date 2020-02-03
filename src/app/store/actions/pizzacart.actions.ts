import { Action } from '@ngrx/store';
import { PizzaItem } from '../models/pizzas.model';
import { PizzaModelState } from 'src/app/app.state';
import { PizzaCartItem } from '../models/pizzacart.model';

// Specify all the types of actions we can take
// Conventionally formatted like: '[SUBJECT(S)] <action taken>'
// NOTE: values declared here MUST be unique!
export enum ActionTypes {
    AddToCart = '[CARTITEM] Pizza added to cart',
    RemoveFromCart = '[CARTITEM] Pizza removed from cart',
    IncreaseCartAmount = '[CARTITEM] Pizza amount increased in cart',
    DecreaseCartAmount = '[CARTITEM] Pizza amount decreased in cart',
}

// Declare the specifications of the AddToCart action
// This action is used to add a pizza to our cart
export class AddToCart implements Action {
    readonly type = ActionTypes.AddToCart;

    constructor(public payload: PizzaItem) { }
}

// Declare the specifications of the RemoveFromCart action
// This action is used to remove a pizza from our cart
export class RemoveFromCart implements Action {
    readonly type = ActionTypes.RemoveFromCart;

    constructor(public payload: PizzaItem) { }
}

// Declare the specifications of the IncreaseCartAmount action
// This action is used to increase the amount of a pizza in our cart
export class IncreaseCartAmount implements Action {
    readonly type = ActionTypes.IncreaseCartAmount;

    constructor(public payload: PizzaCartItem) { }
}

// Declare the specifications of the DecreaseCartAmount action
// This action is used to decrease the amount of a pizza in our cart
export class DecreaseCartAmount implements Action {
    readonly type = ActionTypes.DecreaseCartAmount;

    constructor(public payload: PizzaCartItem) { }
}

export type Actions = AddToCart | RemoveFromCart | IncreaseCartAmount | DecreaseCartAmount;
