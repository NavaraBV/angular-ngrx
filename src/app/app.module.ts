// Built-in modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// NGRX modules
import { StoreModule, ActionReducerMap, MetaReducer, ActionReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NgrxFormsModule } from 'ngrx-forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// NGRX localstorage module
import { localStorageSync } from 'ngrx-store-localstorage';

// Our reducers
import { pizzaModelReducer } from './store/reducers/pizzaModel.reducer';
import { pizzaformReducer } from './store/reducers/pizzaform.reducer';

// Our effects
import { PizzaEffects } from './store/effects/pizza.effects';

// Page components
import { FinderComponent } from './finder/finder.component';
import { CollectionComponent } from './collection/collection.component';

// Shared components
import { MaterialModule } from './shared/material.module';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { PizzaListComponent } from './shared/pizzalist/pizzalist.component';

// Plugins
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AppState } from './app.state';
import { PizzaformComponent } from './pizzaform/pizzaform.component';
import { environment } from 'src/environments/environment';

// <Setup the ngrx-store-localstore>

// Specify the reducers in our program and what parts of our state they apply to
const reducers: ActionReducerMap<AppState> = { pizzaModel: pizzaModelReducer, formModel: pizzaformReducer }

// Specify what is stored from our state in localstorage
export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({ keys: ['pizzaModel'], rehydrate: true })(reducer);
}
const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

// </Setup the ngrx-store-localstore>
@NgModule({
  declarations: [
    AppComponent,
    FinderComponent,
    SidenavComponent,
    CollectionComponent,
    PizzaListComponent,
    PizzaformComponent
  ],
  imports: [
    // Add the reducers we specified to the store module
    StoreModule.forRoot(
      reducers,
      { metaReducers }
    ),
    // Add our own effects to the effects module
    EffectsModule.forRoot([PizzaEffects]),
    NgrxFormsModule,
    // Instrumentation must be imported after importing StoreModule (config is optional)
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),

    HttpClientModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
