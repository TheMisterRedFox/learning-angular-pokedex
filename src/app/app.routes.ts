import { Routes } from '@angular/router';
import { HomeComponent } from './composants/home/home.component';
import { PokemonsComponent } from './composants/pokemons/pokemons.component';
import { PokemonComponent } from './composants/pokemon/pokemon.component';

export const routes: Routes = [
    {path: "home", component: HomeComponent, title: "Home"},
    {path: "pokemons", component: PokemonsComponent, title: "Pokemons"},
    {path: "pokemon/:id", component: PokemonComponent, title: "Détail de pokémon"},
    {path: "", redirectTo: "home", pathMatch: "full"},
    {path: "**", redirectTo: "home"}
];
