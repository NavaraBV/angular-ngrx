import { Component, OnInit } from '@angular/core';
import { PizzaItem } from '../store/models/pizzas.model';
import { LoadPizzas, AddToPizzaCollection, FilterPizzas } from '../store/actions/pizza.actions'
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
      // Subscribe to updates of the state
      select('pizzalist')).subscribe(data => {
        // Get the pizzalist from the state
        this.pizzaList = data;
      });
  }

  ngOnInit() {
    // Load the initial pizzas
    this.store.dispatch(new LoadPizzas({ page: this.page, limit: this.limit }));
  }

  // Load the next page of images
  loadMore() {

    // Check if we can still load images
    if (this.canLoadMore) {
      this.page += 1;
      // Add the next page of pizzas to our state
      this.store.dispatch(new LoadPizzas({ page: this.page, limit: this.limit }));
    }
  }

  // Filter the results
  onFilterChange(filter) {
    // Change our state with the new filter
    this.store.dispatch(new FilterPizzas({ page: this.page, limit: this.limit, filter: filter }));
  }

  get canLoadMore(): boolean {
    return this.page < this.maxpages;
  }
}
