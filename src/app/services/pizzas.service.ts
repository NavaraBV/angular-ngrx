import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PizzasService {

  constructor(private http: HttpClient) { }

  getAll(page, limit = 20) {
    return this.http.get(
      `http://5e2836e5120f820014bf422a.mockapi.io/api/pizza?page=${page}&limit=${limit}`
    );
  }

  putLike(id, likes) {
    return this.http.put(
      `http://5e2836e5120f820014bf422a.mockapi.io/api/pizza/${id}`,
      {
        "likes": likes
      }
    );
  }
}
