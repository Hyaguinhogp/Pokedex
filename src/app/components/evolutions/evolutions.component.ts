import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { IChain, IEvolutionChain, IPokemon, ISpecie } from 'src/app/app-interfaces';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-evolutions',
  templateUrl: './evolutions.component.html',
  styleUrls: ['./evolutions.component.css']
})
export class EvolutionsComponent {
  @Input() name: string = '';
  specie: ISpecie = {} as ISpecie;
  evolutionChain: IEvolutionChain = {} as IEvolutionChain;
  evolutions: IPokemon[] = [];
  
  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getSpecie(this.name)
      .subscribe((specie) => {
        this.api.getEvolutionChain(specie.evolution_chain.url)
          .subscribe((chain) => {
            this.evolutionChain = chain;
            this.getEvolutionChainNames(this.evolutionChain.chain, this.evolutions);
          })
      })
  }

  getEvolutionChainNames(chain: IChain, resultArray: IPokemon[] = []) {
    if (chain.species) {
      resultArray.push(chain.species);
    }
  
    if (chain.evolves_to) {
      for (const evolution of chain.evolves_to) {
        this.getEvolutionChainNames(evolution, resultArray);
      }
    }
  
    return resultArray;
  }
}
