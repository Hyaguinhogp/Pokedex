import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingService } from './loading.service';
import { Observable } from 'rxjs';
import { IEvolutionChain, IPokemon, IPokemonList, ISpecie } from '../app-interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient, private loadingService: LoadingService) { }

  listAll(): Observable<IPokemonList> {
    this.loadingService.show();
    return this.http.get<IPokemonList>(this.baseUrl + '/pokemon?limit=1292');
  }

  listWithLimit(limit: number): Observable<IPokemonList> {
    this.loadingService.show();
    return this.http.get<IPokemonList>(this.baseUrl + '/pokemon?limit=' + limit);
  }

  getByname(name: string): Observable<IPokemon> {
    return this.http.get<IPokemon>(this.baseUrl + '/pokemon/' + name);
  }
  
  getSpecie(name: string): Observable<ISpecie> {
    return this.http.get<ISpecie>(this.baseUrl + '/pokemon-species/' + name);
  }

  getEvolutionChain(url: string): Observable<IEvolutionChain> {
    return this.http.get<IEvolutionChain>(url);
  }
}
