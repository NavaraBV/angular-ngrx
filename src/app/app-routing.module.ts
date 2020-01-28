import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FinderComponent } from './finder/finder.component';
import { CollectionComponent } from './collection/collection.component';
import { PizzaformComponent } from './pizzaform/pizzaform.component';


const routes: Routes = [
  { path: '', component: FinderComponent },
  { path: 'finder', component: FinderComponent },
  { path: 'collection', component: CollectionComponent },
  { path: 'pizzaform', component: PizzaformComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
