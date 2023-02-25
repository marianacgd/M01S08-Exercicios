import { Component, OnInit } from '@angular/core';
import { PersonagemService } from '../../app/personagem.service';
import { PersonagemClass } from '../../app/personagem-class';

@Component({
  selector: 'app-star-wars',
  templateUrl: './star-wars.component.html',
  styleUrls: ['./star-wars.component.css'],
})
export class StarWarsComponent implements OnInit {
  public personagens: PersonagemClass[] = [];

  constructor(private _personagemService: PersonagemService) {}

  ngOnInit(): void {
    this._personagemService.getPersonagens().subscribe((result) => {
      this.personagens = result;
    });
  }
}
