import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent {
  @Input() pokemon: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://pokeapi.co/api/v2/pokemon/' + this.pokemon.name)
      .subscribe(data => this.pokemon = data);

    const root = document.documentElement;
    let width = window.innerWidth;
    console.log(width)
    if (width < 1200) {
      root.style.setProperty('--column-width', (((width - 40) - (5 * 20)) / 6) + 'px');
    }
    else {
      root.style.setProperty('--column-width', (((1200) - (11 * 20)) / 12) + 'px');
    }
  }

}
