import { Component } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  animals = [
    {tipo: 'cão', nome: 'Jones'},
    {tipo: 'gato', nome: 'estevão'},
    {tipo: 'passaro', nome: 'alexandre'},
    {tipo: 'cão', nome: 'Viviane'}
  ]

}
