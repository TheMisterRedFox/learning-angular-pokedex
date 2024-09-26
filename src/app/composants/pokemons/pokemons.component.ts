import { Component } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon';
import { FetchPokemonService } from '../../services/fetch-pokemon.service';
import { JsonPipe } from '@angular/common';
import { GenerationsComponent } from '../generations/generations.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pokemons',
  standalone: true,
  imports: [JsonPipe, GenerationsComponent, RouterLink],
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.less'
})
export class PokemonsComponent {
   pokemons: Array<Pokemon> = [];

   pokemonTypeColors: Record<string, string> = {
      Feu: "rgba(240, 128, 48, 0.5)",
      Eau: "rgba(104, 144, 240, 0.5)",
      Plante: "rgba(120, 200, 80, 0.5)",
      Insecte: "rgba(168, 184, 32, 0.5)",
      Normal: "rgba(168, 168, 120, 0.5)",
      Vol: "rgba(168, 144, 240, 0.5)",
      Poison: "rgba(160, 64, 160, 0.5)",
      Fée: "rgba(238, 153, 172, 0.5)",
      Psy: "rgba(248, 88, 136, 0.5)",
      Électrik: "rgba(248, 208, 48, 0.5)",
      Sol: "rgba(224, 192, 104, 0.5)",
      Combat: "rgba(192, 48, 40, 0.5)",
      Roche: "rgba(184, 160, 56, 0.5)",
      Spectre: "rgba(112, 88, 152, 0.5)",
      Dragon: "rgba(112, 56, 248, 0.5)",
      Acier: "rgba(184, 184, 208, 0.5)",
      Ténèbres: "rgba(112, 88, 72, 0.5)",
      Glace: "rgba(152, 216, 216, 0.5)"
  };

  constructor(fetchPokemonService: FetchPokemonService) {
     this.getPokemons(fetchPokemonService);
   }

   getCountPokemon(): number {
    return this.pokemons.length;
   }

   //getWeightPokemonToFrFormat(pokemon: Pokemon): string {
   //   return pokemon.weight ? pokemon.weight.toString().replace('.', ',') + " kg": "N/A";
   //}

   //getSizePokemonToFrFormat(pokemon: Pokemon): string {
   //   return pokemon.size ? pokemon.size.toString().replace('.', ',') + " m": "N/A";
   //}

   getPokemonTypeBackgroundColor(pokemon: Pokemon): string {
      //linear gradient entre les deux types
      if(pokemon.type.length > 1) {
      return `background: linear-gradient(144deg, ${this.pokemonTypeColors[pokemon.type[0]]}, ${this.pokemonTypeColors[pokemon.type[1]]});`;
      } else {
         return `background: ${this.pokemonTypeColors[pokemon.type[0]]}`;
      }
   }

   getPokemons(fetchPokemonService: FetchPokemonService){
    fetchPokemonService.fetchPokemon().subscribe({
         next: (data: Array<any>) => {
           this.pokemons = [];
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
         },
         error: (error: any) => {
           console.error(error);
         }
       });
   }

}
