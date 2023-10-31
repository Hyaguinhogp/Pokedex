import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IPokemon } from 'src/app/app-interfaces';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent {
  @Input() pokemon: IPokemon = {} as IPokemon;
  isVisible = false;

  constructor(
    private api: ApiService,
    private router: Router
  ) { }

  ngOnInit() {
    if(this.pokemon.name) {

      this.api.getByname(this.pokemon.name)
        .subscribe(data => {
          this.pokemon = data;
          this.isVisible = true;
          if(data.sprites.front_default == null) this.isVisible = false;
        });
    }
  }

  clickHandle() {
    this.router.navigate(['/pokemon/' + this.pokemon.name]);
  }
}
