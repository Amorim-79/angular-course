import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursesComponent } from './courses.component';
import { CoursesDetailComponent } from './courses-detail/courses-detail.component';

const coursesRoutes: Routes = [
  {
    path: '',
    component: CoursesComponent,
    children: [
      {
        path: ':id',
        component: CoursesDetailComponent
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(coursesRoutes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
