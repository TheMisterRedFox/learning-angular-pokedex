import { Routes } from '@angular/router';
import { HomeComponent } from './composants/home/home.component';
import { PokemonsComponent } from './composants/pokemons/pokemons.component';
import { PokemonComponent } from './composants/pokemon/pokemon.component';
import { GenerationsComponent } from './composants/generations/generations.component';

export const routes: Routes = [
    {path: "home", component: HomeComponent, title: "Home"},
    {path: "generations", component: GenerationsComponent, title: "Générations"},
    {path: "pokemons", component: PokemonsComponent, title: "Pokemons"},
    {path: "pokemon/:id", component: PokemonComponent, title: "Détail de pokémon"},
    {path: "", redirectTo: "home", pathMatch: "full"},
    {path: "**", redirectTo: "home"}
];
