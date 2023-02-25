import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, lastValueFrom } from 'rxjs';
import { PersonagemClass } from './personagem-class';
import { API_PATH } from '../environments/environments';
//import { IPersonagem } from './ipersonagem';

@Injectable({
  providedIn: 'root',
})
export class PersonagemService {
  // private url = 'http://localhost:3000/personagens';
  //private API_PATH = 'http://localhost:3000/personagens';

  constructor(private _httpCliente: HttpClient) {}

  public getPersonagens(): Observable<PersonagemClass[]> {
    return this._httpCliente.get<PersonagemClass[]>(`${API_PATH}personagens`);
  }

  // public async getPersonagemInterface(): Promise<IPersonagem[]> {
  //   const observable = this._httpCliente.get<IPersonagem[]>(API_PATH);
  //   const promise = lastValueFrom(observable);
  //   return promise;
  // }
}
