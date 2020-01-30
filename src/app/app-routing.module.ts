import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FinderComponent } from './finder/finder.component';
import { CollectionComponent } from './collection/collection.component';


const routes: Routes = [
  { path: '', component: FinderComponent },
  { path: 'finder', component: FinderComponent },
  { path: 'collection', component: CollectionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
