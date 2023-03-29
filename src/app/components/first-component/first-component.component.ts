import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
  name: string = 'Mateus';
  idade: Number = 23;
  job: string = 'Programador';
  games = ['RE4', 'Shadow of the Colossus', 'Super Metroid'];
  car = {
    name: 'Sandero',
    ano: 2015,
    placa: 'abb-2214'
  }
}
