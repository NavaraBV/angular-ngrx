import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { reducer } from './store/reducers/todolist.reducer';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';
import { EffectsModule } from '@ngrx/effects';
import { TodolistEffects } from './store/effects/todolist.effects';

@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      todolist: reducer
    }),
    EffectsModule.forRoot([TodolistEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
