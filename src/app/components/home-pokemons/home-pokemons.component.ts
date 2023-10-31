import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-pokemons',
  templateUrl: './home-pokemons.component.html',
  styleUrls: ['./home-pokemons.component.css']
})
export class HomePokemonsComponent {
  pokemons: any;
  pokemonList: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://pokeapi.co/api/v2/pokemon?limit=18')
      .subscribe(data => {
        this.pokemons = data
        this.pokemonList = this.pokemons.results
      });
  }
}
