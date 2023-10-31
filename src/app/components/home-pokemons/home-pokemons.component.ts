import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IPokemon, IPokemonList } from 'src/app/app-interfaces';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-pokemons',
  templateUrl: './home-pokemons.component.html',
  styleUrls: ['./home-pokemons.component.css']
})
export class HomePokemonsComponent {
  pokemonList$: Observable<IPokemonList> = new Observable<IPokemonList>();
  pokemonList: IPokemon[] = [];
  pokemonObs: Observable<IPokemonList> = new Observable<IPokemonList>();

  constructor(
    private api: ApiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.pokemonList$ = this.api.listWithLimit(18);
  }

  handleClick() {
    this.router.navigate(['/search/all']);
  }
}
