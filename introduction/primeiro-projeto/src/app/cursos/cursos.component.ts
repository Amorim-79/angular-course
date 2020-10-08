import { CursosService } from './cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  constructor(private cursosService: CursosService) { }

  cursos: Array<string>;

  ngOnInit(): void {
    this.cursos = this.cursosService.listCourses();
  }

}
