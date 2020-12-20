import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CoursesService } from '../courses.service';
import { Observable, of } from 'rxjs';

import { ICourseDataModel } from './../course-data.model';

@Injectable({
    providedIn: 'root',
})
export class CourseResolverGuard implements Resolve<ICourseDataModel> {

    constructor(private courseService: CoursesService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): ICourseDataModel | Observable<ICourseDataModel> | Promise<ICourseDataModel> {
        if (route.params && route.params['id']) {
            return this.courseService.getById(route.params['id']);
        }

        return of({
            id: null,
            name: null,
        });
    }

}
