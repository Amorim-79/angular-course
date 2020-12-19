import { delay } from 'rxjs/operators';
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
}
