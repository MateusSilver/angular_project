import { Component } from '@angular/core';

import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {

  constructor(private listService : ListService){
    this.getAnimals();
  }

  getAnimals() : void {
    this.listService.getAll().subscribe((animals) => {
      this.animals = animals
    });
  }

  removeAnimal(animal : Animal) : void{
      this.animals = this.listService.remove(this.animals, animal);
    }

  animalDetails = '';

  showAge(animal : Animal) : void {
    this.animalDetails = `O pet ${animal.nome} tem ${animal.idade} ano de idade`;
  }

  animals : Animal[] = [];

}
