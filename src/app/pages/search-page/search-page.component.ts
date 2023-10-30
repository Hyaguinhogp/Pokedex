import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent {
  pokemons: any;
  pokemonList: any;

  constructor(private api: ApiService, private loadingService: LoadingService) { }

  ngOnInit() {
    this.api.listWithLimit(18).subscribe(data => {
      this.pokemons = data;
      this.pokemonList = this.pokemons.results;
      this.loadingService.hide();
    })
  }
}
