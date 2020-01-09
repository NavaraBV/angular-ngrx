import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../app.state';
import { TodoItem } from '../store/models/todolist.model'
import * as TodolistActions from '../store/actions/todolist.actions';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  addTodo(title, description) {
    this.store.dispatch(new TodolistActions.AddTodoItem({ title: title, description: description }));
  }

}
