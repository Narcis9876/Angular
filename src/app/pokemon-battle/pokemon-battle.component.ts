import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PokemonapiService } from '../pokemonapi.service';

@Component({
  selector: 'app-pokemon-battle',
  templateUrl: './pokemon-battle.component.html',
  styleUrls: ['./pokemon-battle.component.scss']
})
export class PokemonBattleComponent implements OnInit {

  options=this.servicePoke.options;
  @ViewChild('f') pokeForm:NgForm;
  fighterOne:any[]=[];
  fighterTwo:any[]=[];
    pokemonUnu:string;
    pokemonDoi:string;
    versus=false;
    f1Power:number;
    f2Power:number;

    constructor(private servicePoke:PokemonapiService ) { }

    ngOnInit(): void {
    }

    fetchPokemon(){
  this.servicePoke.fetchPokemon(this.pokemonUnu).subscribe(responseData=>{
  this.fighterOne.push(responseData);
  this.fighterOne.forEach(value=>{
    this.f1Power=value.base_experience;
  console.log(this.f1Power);

  });

  });
  this.servicePoke.fetchPokemon(this.pokemonDoi).subscribe(responseData=>{
    this.fighterTwo.push(responseData);
    this.fighterTwo.forEach(value=>{
      this.f2Power=value.base_experience;
    console.log(this.f2Power);

    });

  });

  this.versus=true;

    };

    refresh(){
      location.reload();
    }

}
