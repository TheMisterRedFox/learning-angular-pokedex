import { Component } from '@angular/core';
import { ShowPokemonsService } from '../../services/show-pokemons.service';
import { Pokemon } from '../../interfaces/pokemon';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.less'
})
export class PokemonComponent {

  pokemon?: Pokemon;
  searchPokemonId: number = 0;

  constructor(pokemonService: ShowPokemonsService, private route: ActivatedRoute, private router: Router) {
    this.getSpecificPokemons(pokemonService);
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
    console.log(params);
    this.searchPokemonId = parseInt(params["id"]);
    });
    }

  getSpecificPokemons(pokemonService: ShowPokemonsService){
    pokemonService.fetchPokemonById(this.searchPokemonId).subscribe({
       next: (pokemon: any) => {
        console.log(pokemon);
          this.pokemon = {
            id: pokemon.pokedex_id,
            name: pokemon.name.fr,
            category: pokemon.category,
            type: pokemon.types.map((type: any) => type.name),
            sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.pokedex_id}.png`,
            weight: pokemon.weight,
            size: pokemon.height
          }
       },
       error: (error: any) => {
         console.error(error);
       }
     });
 }
}
