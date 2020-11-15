import { CreateCursoComponent } from './create-curso/create-curso.component';
import { CursosComponent } from './cursos/cursos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    CursosComponent,
    CreateCursoComponent,
  ],
  exports: [
    CursosComponent,
    CreateCursoComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class CursoModule { }
