import { Injectable } from '@angular/core';
import { Animal } from '../Animal';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private apiUrl = 'https://localhost:3000/animals'
  constructor(private http : HttpClient) { 
    
  }

  remove(animals : Animal[], animal : Animal){
    console.log('removendo: ');
    return animals.filter((a) => 
      animal.nome !== a.nome)
  }

  getAll(): Observable<Animal[]>{
    return this.http.get<Animal[]>(this.apiUrl);
  }
}
