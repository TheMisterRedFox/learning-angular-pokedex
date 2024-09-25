import { inject, Injectable } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShowPokemonsService {

  constructor() { }

  pokemons: Array<Pokemon> = [];

  private httpClient: HttpClient = inject(HttpClient)

  fetchPokemon(): any {
    return this.httpClient.get(`https://tyradex.vercel.app/api/v1/pokemon`);
  }
}
