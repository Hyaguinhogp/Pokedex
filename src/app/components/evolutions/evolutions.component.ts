import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-evolutions',
  templateUrl: './evolutions.component.html',
  styleUrls: ['./evolutions.component.css']
})
export class EvolutionsComponent {
  @Input() name: string = '';
  specie: any;
  evolutionChain: any;
  evolutions: string[] = [];
  
  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getSpecie(this.name)
      .subscribe((specie: any) => {
        this.api.getEvolutionChain(specie.evolution_chain.url)
          .subscribe((chain) => {
            this.evolutionChain = chain;
            this.getEvolutionChainNames(this.evolutionChain.chain, this.evolutions);
          })
      })
  }

  getEvolutionChainNames(chain: any, resultArray: any[] = []) {
    if (chain.species) {
      resultArray.push(chain.species.name);
    }
  
    if (chain.evolves_to) {
      for (const evolution of chain.evolves_to) {
        this.getEvolutionChainNames(evolution, resultArray);
      }
    }
  
    return resultArray;
  }
}
