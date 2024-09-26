import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.less'
})
export class NavbarComponent {
  //links: Array<string> = ['Accueil', 'Pokemons']

  links: Array<{route: string, name: string}> = [
    {route: 'home', name: 'Accueil'},
    {route: 'generations', name: 'Générations'},
    {route: 'pokemons', name: 'Pokemons'}
  ];
}
