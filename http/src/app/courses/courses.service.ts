import { delay, take } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ICourseDataModel } from './course-data.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = `${environment.API}/courses`

  constructor(private http: HttpClient) { }

  list(): Observable<ICourseDataModel[]> {
    return this.http.get<ICourseDataModel[]>(this.API)
      .pipe(
        delay(3000)
      );
  }

  getById(id: number): Observable<ICourseDataModel> {
    return this.http.get<ICourseDataModel>(`${this.API}/${id}`).pipe(
      take(1)
    )
  }

  private create(course) {
    return this.http.post(this.API, course).pipe(
      take(1)
    );
  }

  private update(course) {
    return this.http.put(`${this.API}/${course.id}`, course).pipe(
      take(1)
    );
  }

  save(course) {
    if (course.id) {
      return this.update(course);
    }
    return this.create(course);
  }

  remove(id: number) {
    return this.http.delete(`${this.API}/${id}`).pipe(
      take(1),
    );
  }
}
