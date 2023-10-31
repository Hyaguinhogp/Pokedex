import { Component, Input } from '@angular/core';
import { IStat } from 'src/app/app-interfaces';

@Component({
  selector: 'app-pokemon-stat',
  templateUrl: './pokemon-stat.component.html',
  styleUrls: ['./pokemon-stat.component.css']
})
export class PokemonStatComponent {
  @Input() stat: IStat = {} as IStat;
  barValue: number = 0;

  ngOnInit() {
    this.barValue = 100 / (255 / this.stat.base_stat)
  }
}
