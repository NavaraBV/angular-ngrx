import { Component, OnInit } from '@angular/core';
import { PizzaItem } from '../store/models/pizzas.model';
import { LoadPizzas, AddToPizzaCollection, FilterPizzas } from '../store/actions/pizzalist.actions'
import { Store, select } from '@ngrx/store';
import { AppState } from '../app.state';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { filterPizzas } from '../store/selectors/pizzalist.selectors';
import { map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.scss']
})
export class FinderComponent implements OnInit {

  throttle = 300;
  scrollDistance = 0.2;
  page = 1;
  maxpages = 5;
  limit = 20;
  pizzaList: PizzaItem[];

  filterform: FormGroup;

  constructor(
    private store: Store<AppState>
  ) {
    store.pipe(
      select('pizzalist')).subscribe(data => {
        this.pizzaList = data;
      });
  }

  ngOnInit() {
    this.store.dispatch(new LoadPizzas({ page: this.page, limit: this.limit }));
  }

  loadMore() {
    if (this.canLoadMore) {
      this.page += 1;
      this.store.dispatch(new LoadPizzas({ page: this.page, limit: this.limit }));
    }
  }

  onFilterChange(filter) {
    this.store.dispatch(new FilterPizzas({ page: this.page, limit: this.limit, filter: filter }));
  }

  get canLoadMore(): boolean {
    return this.page < this.maxpages;
  }
}
