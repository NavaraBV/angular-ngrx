import { Component, OnInit } from '@angular/core';
import { Observable, from, Subscription } from 'rxjs';
import { TodoItem } from '../store/models/todolist.model';
import { Store, select } from '@ngrx/store';
import { AppState } from '../app.state';
import * as TodolistActions from '../store/actions/todolist.actions';
import { selectFirstTodo, selectLastTodo } from './../store/selectors/todolist.selectors';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

  todolist: Observable<TodoItem[]>;

  alertFirstSub: Subscription;
  alertLastSub: Subscription;

  constructor(private store: Store<AppState>) {
    this.todolist = this.store.select('todolist');
  }

  ngOnInit() {
  }

  deleleteTodo(index) {
    this.store.dispatch(new TodolistActions.RemoveTodoItem(index))
  }

  alertFirst() {
    this.alertFirstSub = this.store.pipe(select(selectFirstTodo))
      .subscribe(todo => {
        alert(`Title: ${todo.title} \nDescription: ${todo.description}`);
        if (this.alertFirstSub)
          this.alertFirstSub.unsubscribe();
      });
  }

  alertLast() {
    this.alertLastSub = this.store.pipe(select(selectLastTodo))
      .subscribe(todo => {
        alert(`Title: ${todo.title} \nDescription: ${todo.description}`);
        if (this.alertLastSub)
          this.alertLastSub.unsubscribe();
      });
  }
}
