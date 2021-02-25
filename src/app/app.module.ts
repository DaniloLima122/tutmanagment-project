import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ActionReducer, StoreModule, Action } from '@ngrx/store';
import { AppComponent } from './app.component';
import { Tutorial } from './models/tutorial.model';
import { ReadComponent } from './read/read.component';
import { reducer } from './reducers/tutorial.reducer';
import { CreateComponent } from './create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    StoreModule.forRoot<ActionReducer<Tutorial[], Action>>({
      tutorial: reducer,
      tutorialB: reducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
