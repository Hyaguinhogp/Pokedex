import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { LoadingService } from 'src/app/services/loading.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent {
  pokemons: any;
  pokemonList: any[] = [];
  search:string = '';

  constructor(
    private api: ApiService, 
    private loadingService: LoadingService,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.router.paramMap.subscribe((paramMap) => {
      this.search = paramMap.get('name')!;
      this.loadData();
    })
  }
  
  loadData() {
    this.search = this.router.snapshot.params['name']; 
    console.log(this.search);
    this.api.listAll().subscribe(data => {
      this.pokemons = data;
      this.pokemonList = this.pokemons.results.filter((pokemon: any) => {
        return pokemon.name.includes(this.search.toLocaleLowerCase());
      });
      this.loadingService.hide();
    })
  }
}
