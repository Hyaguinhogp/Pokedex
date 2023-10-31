import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {
  pokemons: any;

  constructor(
    private api: ApiService,
    private loadingService: LoadingService
  ) {}

  ngOnInit() {
    this.api.listWithLimit(18)
      .subscribe((data: any) => {
        this.pokemons = data.results;
        this.loadingService.hide();
      })
  }
}
