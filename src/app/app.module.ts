import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FirstPageComponent } from './first-page/first-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AllPokeComponent } from './all-poke/all-poke.component';
import { PokemonBattleComponent } from './pokemon-battle/pokemon-battle.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { SpinnerComponent } from './spinner/spinner.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { FormPokeComponent } from './form-poke/form-poke.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    HomePageComponent,
    AllPokeComponent,
    PokemonBattleComponent,
    SpinnerComponent,
    FormPokeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, HttpClientModule, FormsModule, MatButtonModule, MatAutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
