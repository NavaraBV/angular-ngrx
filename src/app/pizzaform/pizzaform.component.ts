import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroupState } from 'ngrx-forms';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { PizzaItem } from '../store/models/pizzas.model';

@Component({
  selector: 'app-pizzaform',
  templateUrl: './pizzaform.component.html',
  styleUrls: ['./pizzaform.component.scss']
})
export class PizzaformComponent implements OnInit {

  ngOnInit() {
  }

  formState$: Observable<FormGroupState<PizzaItem>>;

  constructor(private store: Store<AppState>) {
    this.formState$ = store.select(s => s.formModel);
  }
}
