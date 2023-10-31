import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IPokemon, IPokemonList } from 'src/app/app-interfaces';
import { ApiService } from 'src/app/services/api.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {
  pokemons$: Observable<IPokemonList> = new Observable<IPokemonList>();

  constructor(
    private api: ApiService,
    private loadingService: LoadingService
  ) {}

  ngOnInit() {
    this.pokemons$ = this.api.listWithLimit(18);
  }
}
