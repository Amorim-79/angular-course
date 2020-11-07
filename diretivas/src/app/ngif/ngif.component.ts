import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent implements OnInit {

  cursos = ['Angular', 'ReactJS'];
  mudarCurso: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  mudarCursos(): void {
    this.mudarCurso = !this.mudarCurso;
  }

}
