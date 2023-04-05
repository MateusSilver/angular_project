import { Component } from '@angular/core';

@Component({
  selector: 'app-emiter',
  templateUrl: './emiter.component.html',
  styleUrls: ['./emiter.component.css']
})
export class EmiterComponent {
  myNumber : Number = 1;

  onChangeNumber() {
    this.myNumber = Math.floor(Math.random()*10);
  }
}
