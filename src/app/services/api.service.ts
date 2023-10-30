import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'https://pokeapi.co/api/v2';
  data: any;

  constructor(private http: HttpClient, private loadingService: LoadingService) { }

  listAll() {
    this.loadingService.show();
    return this.http.get(this.baseUrl + '/pokemons?limit=1292');
  }

  listWithLimit(limit: number) {
    this.loadingService.show();
    return this.http.get(this.baseUrl + '/pokemon?limit=' + limit);
  }

  getByname(name: string) {
    this.loadingService.show();
    return this.http.get(this.baseUrl + '/pokemon/' + name);
  }
}
