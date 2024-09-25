import { Component } from '@angular/core';

@Component({
  selector: 'app-generations',
  standalone: true,
  imports: [],
  templateUrl: './generations.component.html',
  styleUrl: './generations.component.less'
})
export class GenerationsComponent {
  generationsList: Array<string> = [
    "Génération 1",
    "Génération 2",
    "Génération 3",
    "Génération 4",
    "Génération 5",
    "Génération 6",
    "Génération 7"
  ];
}
