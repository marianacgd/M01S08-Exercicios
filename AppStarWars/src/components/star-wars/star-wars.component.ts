import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { PersonagemService } from '../../app/personagem.service';
import { StarWars } from '../../app/starwars';

@Component({
  selector: 'app-star-wars',
  templateUrl: './star-wars.component.html',
  styleUrls: ['./star-wars.component.css']
})
export class StarWarsComponent implements OnInit {

  public personagens: StarWars[] = [];

  constructor(private _personagemService: PersonagemService){}

  ngOnInit(): void{
    this._personagemService.getPersonagens()
    .subscribe(
      retorno => {
        this.personagens = retorno.map(func => {
          return new StarWars(
            func.id,
            func.nome,
            func.habilidade,
            func.planeta,
            func.armas,
            func.avatar
          )
        })
      }
    )
  }

}
