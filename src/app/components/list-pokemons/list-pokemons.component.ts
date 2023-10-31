import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { IPokemon, IPokemonList } from 'src/app/app-interfaces';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-list-pokemons',
  templateUrl: './list-pokemons.component.html',
  styleUrls: ['./list-pokemons.component.css']
})
export class ListPokemonsComponent {
  @Input() pokemonList$: Observable<IPokemonList> = new Observable<IPokemonList>();
  @Input() mobileColumns: 3 | 2 = 3;
  @Input() desktopColumns: 4 | 6 = 6;
  @Input() maxPokemons = 12;
  pokemonList: IPokemon[] = [];
  actualPokemons: IPokemon[] = [];
  actualPage = 0;
  isPreviousPossible = false;
  isNextPossible = false;

  classes: string[] = ['pokemons-table'];

  constructor(private loadingService: LoadingService) { }

  ngOnInit() {
    this.configureColumns();
    this.pokemonList$.subscribe((data) => {
      this.actualPage = 0;
      this.pokemonList = data.results;
      this.showPokemons();
      this.loadingService.hide();
    });
  }

  configureColumns() {
    this.classes.push(this.mobileColumns == 2 ? 'two-columns' : 'three-columns');
    this.classes.push(this.desktopColumns == 4 ? 'four-columns' : 'six-columns');
  }

  showPokemons() {
    const startIndex = this.actualPage * this.maxPokemons;
    const endIndex = startIndex + this.maxPokemons;
    this.actualPokemons = this.pokemonList.slice(startIndex, endIndex);

    this.isPreviousPossible = this.actualPage > 0;
    this.isNextPossible = endIndex < this.pokemonList.length;
  }

  nextPage() {
    if (this.isNextPossible) {
      this.actualPage += 1;
      this.showPokemons();
    }
  }

  previousPage() {
    if (this.isPreviousPossible) {
      this.actualPage -= 1;
      this.showPokemons();
    }
  }
}
