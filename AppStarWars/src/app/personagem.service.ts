import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StarWars } from './starwars';

@Injectable({
  providedIn: 'root'
})
export class PersonagemService {

  private url = 'http://localhost:3000/personagens';

  constructor(private _httpCliente: HttpClient) { }

  public getPersonagens(): Observable<StarWars[]> {
    return this._httpCliente.get<StarWars[]>(this.url);
  }
}
