import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllPokeComponent } from './all-poke/all-poke.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { FormPokeComponent } from './form-poke/form-poke.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PokemonBattleComponent } from './pokemon-battle/pokemon-battle.component';


const routes: Routes = [
  {path:'', component:FirstPageComponent, pathMatch:'full'},
  {path:'home', component:HomePageComponent, children:[
    {path:'', redirectTo:'viewPokemon', pathMatch:'full'},
    {path:'viewPokemon', component:AllPokeComponent},
    {path:'addPokemon', component:FormPokeComponent},
    {path:'pokemonBattle', component:PokemonBattleComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
