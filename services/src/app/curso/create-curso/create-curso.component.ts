import { CursosService } from './../../shared/cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-curso',
  templateUrl: './create-curso.component.html',
  styleUrls: ['./create-curso.component.css']
})
export class CreateCursoComponent implements OnInit {

  curso = '';

  constructor(private cursosService: CursosService) { }

  ngOnInit(): void {
  }

  createCourse(curso: string): void {
    this.cursosService.createCurso(curso);
  }

}
