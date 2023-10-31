import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { LoadingService } from 'src/app/services/loading.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IPokemon, IPokemonList } from 'src/app/app-interfaces';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent {
  pokemons: IPokemonList = {} as IPokemonList;
  pokemonList$: Observable<IPokemonList> = new Observable<IPokemonList>();
  search: string = '';
  resultsNumber: number = 0;

  constructor(
    private api: ApiService, 
    private router: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.pokemonList$ = this.router.paramMap.pipe(
      switchMap(paramMap => {
        this.search = paramMap.get('name') || '';
        return this.loadData();
      })
    );
  }
  
  loadData(): Observable<IPokemonList> {
    if(this.search == 'all') {
      this.search = 'Todos';
      this.resultsNumber = 1292;
      return this.api.listAll();
    }
    return this.api.listAll().pipe(
      switchMap((data) => {
        const result = data.results.filter((pokemon) => {
          return (pokemon.name && pokemon.name.includes(this.search.toLowerCase()));
        });
        this.resultsNumber = result.length;
        return new Observable<IPokemonList>(observer => {
          observer.next({ results: result });
          observer.complete();
        });
      })
    );
  }
}
