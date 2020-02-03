import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PizzasService {

  constructor(private http: HttpClient) { }

  getAll(page, limit) {
    // Make a call to our mock API with the specified page and limit and a filter
    return this.http.get(
      `http://5e2836e5120f820014bf422a.mockapi.io/api/pizza?page=${page}&limit=${limit}`
    );
  }

  getAllFiltered(page, limit, filter?) {
    if (!filter) {
      filter = '';
    }

    // Make a call to our mock API with the specified page and limit and a filter
    return this.http.get(
      `http://5e2836e5120f820014bf422a.mockapi.io/api/pizza?page=${page}&limit=${limit}&search=${filter}`
    ).pipe(
      delay(500 + Math.random() * 1500),
    );
  }

  putLike(id, likes) {
    // Change the likes of the pizza with the given id
    return this.http.put(
      `http://5e2836e5120f820014bf422a.mockapi.io/api/pizza/${id}`,
      {
        likes
      }
    );
  }
}
