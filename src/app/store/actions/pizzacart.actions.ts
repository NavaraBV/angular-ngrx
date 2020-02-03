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
// TODO 1

// Declare the specifications of the RemoveFromCart action
// This action is used to remove a pizza from our cart
// TODO 1a

// Declare the specifications of the IncreaseCartAmount action
// This action is used to increase the amount of an item in our cart
// TODO  1b

// Declare the specifications of the DecreaseCartAmount action
// This action is used to decrease the amount of an item in our cart
// TODO 1b

export type Actions = any;
