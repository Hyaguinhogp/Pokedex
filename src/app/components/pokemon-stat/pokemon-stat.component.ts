import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-stat',
  templateUrl: './pokemon-stat.component.html',
  styleUrls: ['./pokemon-stat.component.css']
})
export class PokemonStatComponent {
  @Input() stat: any;
  barValue: number = 0;

  ngOnInit() {
    this.barValue = 100 / (255 / this.stat.base_stat)
  }
}
