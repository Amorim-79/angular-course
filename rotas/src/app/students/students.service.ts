import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  students = [
    { id: 1, name: 'Aluno 1', email: 'aluno01@email.com' },
    { id: 2, name: 'Aluno 2', email: 'aluno02@email.com' },
    { id: 3, name: 'Aluno 3', email: 'aluno03@email.com' },
  ];

  constructor() { }

  getAll(): any {
    return this.students;
  }

  getId(id: any): any {
    let studentSelected: any;
    this.students.forEach(student => {
      if (student.id === id) { studentSelected = student; }
    });

    return studentSelected;
  }
}
