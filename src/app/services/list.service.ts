import { Injectable } from '@angular/core';
import { Animal } from '../Animal';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  remove(animals : Animal[], animal : Animal){
    console.log('removendo: ');
    return animals.filter((a) => 
      animal.nome !== a.nome)
  }
}
