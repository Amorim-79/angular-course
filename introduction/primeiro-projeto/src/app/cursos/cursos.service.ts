import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() {}

  listCourses(): Array<string> {
    return ['RxJS', 'Typescript', 'Angular', 'Java'];
  }
}
