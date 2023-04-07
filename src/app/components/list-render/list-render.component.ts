import { Component } from '@angular/core';

import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {

  constructor(private listService : ListService){}

  removeAnimal(animal : Animal) : void{
      this.animals = this.listService.remove(this.animals, animal);
    }

  animalDetails = '';

  showAge(animal : Animal) : void {
    this.animalDetails = `O pet ${animal.nome} tem ${animal.idade} ano de idade`;
  }

  animals : Animal[] = [
    {tipo: 'cão', nome: 'Jones', idade: 3},
    {tipo: 'gato', nome: 'estevão', idade: 2},
    {tipo: 'passaro', nome: 'alexandre', idade: 1},
    {tipo: 'cão', nome: 'Viviane', idade: 7}
  ];

}
