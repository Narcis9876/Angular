import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-form-poke',
  templateUrl: './form-poke.component.html',
  styleUrls: ['./form-poke.component.scss']
})
export class FormPokeComponent implements OnInit {
@ViewChild('f') addPoke:NgForm;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.fetchPokemons();
  }
viewPoke=false;
vector:any[]=[];

  storePoke(){
    this.vector.push(this.addPoke.value);
    const pokemon=this.vector;
     this.http.put('https://appspoke-d59c5-default-rtdb.europe-west1.firebasedatabase.app/pokemons.json', pokemon).subscribe(reponse=>{
       console.log(reponse);
     });
     this.addPoke.reset();
     event.preventDefault();
    }

    fetchPokemons(){
      this.http.get<any[]>('https://appspoke-d59c5-default-rtdb.europe-west1.firebasedatabase.app/pokemons.json').subscribe(responseData=>{
        responseData?.forEach(element=>{
          this.vector.push(element);
        })

      })
    }

    viewPokemon(){
this.viewPoke=!this.viewPoke;
    }

}
