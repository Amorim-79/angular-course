import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-customizadas',
  templateUrl: './diretivas-customizadas.component.html',
  styleUrls: ['./diretivas-customizadas.component.css']
})
export class DiretivasCustomizadasComponent implements OnInit {

  cursos = ['Angular', 'ReactJS'];
  mudarCurso: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  mudarCursos(): void {
    this.mudarCurso = !this.mudarCurso;
  }

}
