import { LogService } from './log.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  cursos = ['Angular', 'React', 'NodeJS'];

  constructor(private logService: LogService) { }

  getCursos(): string[] {
    this.logService.consoleLog('Os cursos foram listados');
    return this.cursos;
  }

  createCurso(curso): void {
    this.logService.consoleLog(`O curso ${curso} foi criado`);
    this.cursos.push(curso);
  }
}
