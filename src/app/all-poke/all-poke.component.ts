import { Component, OnInit } from '@angular/core';
import { PokemonapiService } from '../pokemonapi.service';

@Component({
  selector: 'app-all-poke',
  templateUrl: './all-poke.component.html',
  styleUrls: ['./all-poke.component.scss']
})
export class AllPokeComponent implements OnInit{


  vector:any[];
  pokemons:any[]=[];
  public clicked=false;
  constructor(private poke:PokemonapiService) { }

  ngOnInit(): void {
    this.fetchPokemon();


  }

  private _listFilter: string = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    console.log('In setter:', value);
    this.filteredProducts = this.performFilter(value);
  }

  fetchPokemon(){
    this.poke.fetchAllPoke().subscribe(responseData=>{
      this.vector=responseData.results;
      this.vector.forEach(value=>{
this.poke.fetchPokemon(value.name).subscribe(respData=>{
this.pokemons.push(respData);
})
      })

    })
    console.log(this.pokemons)
  }



  filteredProducts: any[] = [];

  performFilter(filterBy: string):any[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.pokemons.filter((product: any) =>
      product.name.toLocaleLowerCase().includes(filterBy));

  }

allPoke(){
  if(!this.clicked){
  this.listFilter='';
this.clicked=true;
}
else if(this.clicked){
location.reload();
}
}
  }








