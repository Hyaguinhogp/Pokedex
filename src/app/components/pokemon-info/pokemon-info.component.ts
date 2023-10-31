import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.css']
})
export class PokemonInfoComponent {

  name: string = '';
  pokemon: any;
  isStat: boolean = true;

  constructor(
    private api: ApiService,
    private router: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.router.paramMap.subscribe((paramMap) => {
      this.name = paramMap.get('name')!;
      this.loadData();
    })
  }
  
  loadData() {
    this.name = this.router.snapshot.params['name']; 
    this.api.getByname(this.name)
      .subscribe((data) => {
        this.pokemon = data;
      })
  }

  setSelector() {
    this.isStat = !this.isStat;
  }
}
