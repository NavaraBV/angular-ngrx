import { Component, OnInit } from '@angular/core';
import { PizzaItem } from '../store/models/pizzas.model';
import { Store, select } from '@ngrx/store';
import { AppState } from '../app.state';
import { FormGroup } from '@angular/forms';
import { FilterPizzas } from '../store/actions/pizza.actions';

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
  activeFilter: string;
  isLoading: boolean;

  filterform: FormGroup;

  constructor(
    private store: Store<AppState>
  ) {
    store.pipe(
      // Subscribe to updates of the state
      select('pizzaModel'))
      .subscribe(data => {
        // Get the filtered pizzalist from the state
        this.pizzaList = data.pizzalist;
        this.activeFilter = data.activeFilter;
        this.isLoading = data.isLoading;
      });
  }

  ngOnInit() {
    // Load the initial pizzas
    this.getPizzas();
  }

  // Load the next page of images
  loadMore() {
    // Check if we can still load images
    if (this.canLoadMore) {
      this.page += 1;
      // Add the next page of pizzas to our state
      this.getPizzas();
    }
  }

  getPizzas() {
    // Get new pizzas with the current filter
    this.store.dispatch(new FilterPizzas({ page: this.page, limit: this.limit, filter: this.activeFilter }));
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
