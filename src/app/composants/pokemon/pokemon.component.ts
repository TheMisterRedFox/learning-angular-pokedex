import { Component, inject, OnInit } from '@angular/core';
import { FetchPokemonService } from '../../services/fetch-pokemon.service';
import { Pokemon } from '../../interfaces/pokemon';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.less'
})
export class PokemonComponent implements OnInit {

  pokemon?: Pokemon;
  searchPokemonId: number = 0;
  fetchPokemonService: FetchPokemonService;
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  constructor(fetchPokemonService: FetchPokemonService) {
    this.fetchPokemonService = fetchPokemonService;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
       this.searchPokemonId = params['id'];
    });
    this.getSpecificPokemons(this.fetchPokemonService);
  }

  getSpecificPokemons(pokemonService: FetchPokemonService){
    console.log(this.searchPokemonId)
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
