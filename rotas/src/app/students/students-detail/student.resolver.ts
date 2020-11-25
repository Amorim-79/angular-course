import { StudentsService } from './../students.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Student } from '../student.model';

@Injectable({ providedIn: 'root' })
export class StudentResolver implements Resolve<Student> {

    constructor(private studentsService: StudentsService) {  }

    resolve(
        route: ActivatedRouteSnapshot
        ): Observable<Student> | Promise<Student> | Student {

            const id = route.params.id;
            return this.studentsService.getId(Number(id));
    }
}
