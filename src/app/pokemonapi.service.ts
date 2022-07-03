import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonapiService {

  constructor(private http:HttpClient) { }

  fetchPokemon(pokemonName):Observable<any>{

    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

  }

  fetchAllPoke():Observable<any>{
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/`);

  }
  options=['ditto', 'arceus', 'pikachu'];

}
