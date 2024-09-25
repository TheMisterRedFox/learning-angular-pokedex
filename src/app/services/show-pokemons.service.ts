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

  async get100FirstPokemons(): Promise<Array<Pokemon>> {
    
    return new Promise<Array<Pokemon>>((resolve, reject) => {

      this.fetchPokemon().subscribe({
        next: (data: Array<any>) => {

          data.forEach((pokemon: any) => {
            if(pokemon.pokedex_id !== 0) {
              this.pokemons.push({
                id: pokemon.pokedex_id,
                name: pokemon.name.fr,
                category: pokemon.category,
                type: pokemon.types.map((type: any) => type.name),
                sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.pokedex_id}.png`,
                weight: pokemon.weight,
                size: pokemon.height
              });
            }
          });

          this.pokemons.sort((a: Pokemon, b: Pokemon) => {
            return a.id < b.id ? -1 : 1;
          });
          resolve(this.pokemons);
        },
        error: (error: any) => {
          console.error(error);
          reject(error);
        }
      });
    });
  }
}
