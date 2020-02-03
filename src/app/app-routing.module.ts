import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FinderComponent } from './finder/finder.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';


const routes: Routes = [
  { path: '', component: FinderComponent },
  { path: 'finder', component: FinderComponent },
  { path: 'cart', component: ShoppingCartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
