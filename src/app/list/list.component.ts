import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { PizzaItem } from '../store/models/pizzas.model';
import { LoadPizzas, AddPizza } from '../store/actions/pizzalist.actions'
import { Store, select } from '@ngrx/store';
import { AppState } from '../app.state';
import { selectFirstPizza } from '../store/selectors/pizzalist.selectors';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  throttle = 300;
  scrollDistance = 0.2;
  page = 1;
  limit = 20;
  pizzaList: PizzaItem[];
  pizzaCollection: PizzaItem[];

  constructor(
    private store: Store<AppState>
  ) {
    store.pipe(
      select('pizzalist')).subscribe(data => {
        this.pizzaList = data;
      });

    store.pipe(
      select('pizzacollection')).subscribe(data => {
        this.pizzaCollection = data;
        console.log(this.pizzaCollection);
      });
  }

  ngOnInit() {
    this.store.dispatch(new LoadPizzas({ page: this.page, limit: this.limit }));
  }

  onScroll() {
    this.page += 1;
    this.store.dispatch(new LoadPizzas({ page: this.page, limit: this.limit }));
  }

  onAdd(pizza) {
    this.store.dispatch(new AddPizza(pizza));
  }

  isInCollection(pizza)
  {
    return this.pizzaCollection.indexOf(pizza) >= 0;
  }
}
