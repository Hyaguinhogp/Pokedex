import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent {
  pokemons: any;
  pokemonList: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://pokeapi.co/api/v2/pokemon?limit=18')
      .subscribe(data => {
        console.log(data);
        this.pokemons = data
        this.pokemonList = this.pokemons.results
      });
  }
}
