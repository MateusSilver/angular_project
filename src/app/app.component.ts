import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_project';
  nome = 'joaquim';

  userData = {
    email: "joaquim@gmail.com",
    role: "admin",
  }
}
