import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent {
  @Input() pokemon: any;

  constructor(
    private http: HttpClient,
    private api: ApiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.api.getByname(this.pokemon.name)
      .subscribe(data => this.pokemon = data);
  }

  clickHandle() {
    this.router.navigate(['/pokemon/' + this.pokemon.name]);
  }
}
