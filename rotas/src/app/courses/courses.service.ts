import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  courses = [
    { id: 1, name: 'Angular' },
    { id: 2, name: 'ReactJS' },
    { id: 3, name: 'Java' },
  ];

  constructor() { }

  getAll(): any {
    return this.courses;
  }

  getId(id: any): any {
    let courseSelected: any;
    this.courses.forEach(course => {
      if (course.id === id) { courseSelected = course; }
    });

    return courseSelected;
  }
}
