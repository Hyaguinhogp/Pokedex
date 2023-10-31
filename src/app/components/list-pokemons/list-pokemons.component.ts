import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-pokemons',
  templateUrl: './list-pokemons.component.html',
  styleUrls: ['./list-pokemons.component.css']
})
export class ListPokemonsComponent {
  @Input() pokemonList: any;
  @Input() mobileColumns: 3 | 2 = 3;
  @Input() desktopColumns: 4 | 6 = 6;

  classes: string[] = ['pokemons-table'];

  ngOnInit() {
    this.classes.push(this.mobileColumns == 2 ? 'two-columns' : 'three-columns');
    this.classes.push(this.desktopColumns == 4 ? 'four-columns' : 'six-columns');
  }
}
