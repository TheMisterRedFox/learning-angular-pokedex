import { Routes } from '@angular/router';
import { HomeComponent } from './composants/home/home.component';
import { PokemonsComponent } from './composants/pokemons/pokemons.component';

export const routes: Routes = [
    {path: "home", component: HomeComponent, title: "Home"},
    {path: "pokemons", component: PokemonsComponent, title: "Pokemons"},
    {path: "", redirectTo: "home", pathMatch: "full"}
];
