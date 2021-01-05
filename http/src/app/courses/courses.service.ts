import { delay, take } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CrudService } from './../shared/crud.service';

import { ICourseDataModel } from './course-data.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService extends CrudService<ICourseDataModel> {

  constructor(protected http: HttpClient) {
    super(http, `${environment.API}/courses`);
  }

  
}
