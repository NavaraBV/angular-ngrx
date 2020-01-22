import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule, ActionReducerMap, MetaReducer, ActionReducer } from '@ngrx/store';
import { pizzaReducer } from './store/reducers/pizzalist.reducer';
import { pizzaCollectionReducer } from './store/reducers/pizzacollection.reducer';
import { CreateComponent } from './create/create.component';
import { EffectsModule } from '@ngrx/effects';
import { PizzaListEffects } from './store/effects/pizzalist.effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { ListComponent } from './list/list.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { localStorageSync } from 'ngrx-store-localstorage';
import { AppState } from './app.state';

const reducers: ActionReducerMap<AppState> = { pizzalist: pizzaReducer, pizzacollection: pizzaCollectionReducer }

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({ keys: ['pizzacollection', 'pizzalist'], rehydrate: true })(reducer);
}
const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];


@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ListComponent,
    SidenavComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    StoreModule.forRoot(
      reducers,
      { metaReducers }
    ),
    EffectsModule.forRoot([PizzaListEffects]),
    BrowserAnimationsModule,
    MaterialModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
