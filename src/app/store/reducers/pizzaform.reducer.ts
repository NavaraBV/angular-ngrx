import { Action } from '@ngrx/store';
import { createFormGroupState, updateGroup, FormGroupState, MarkAsSubmittedAction, validate, formGroupReducer } from 'ngrx-forms';
import { required, greaterThanOrEqualTo } from 'ngrx-forms/validation';
import { PizzaItem } from '../models/pizzas.model';

const FORM_ID = 'pizzaform_ID';

const initialFormState = createFormGroupState<PizzaItem>(FORM_ID, {
    id: '',
    name: '',
    description: '',
    price: 0,
    likes: 0,
});

export function pizzaformReducer(state = initialFormState, action: Action): FormGroupState<PizzaItem> {
    var form = formGroupReducer(state, action);

    const pizzaform = updateGroup<PizzaItem>(form, {
        price: validate(greaterThanOrEqualTo(0))
    });

    if (pizzaform !== form) {
        form = pizzaform;
    }

    switch (action.type) {
        case MarkAsSubmittedAction.TYPE:
            return form;
        default: {
            return initialFormState;
        }
    }
}
