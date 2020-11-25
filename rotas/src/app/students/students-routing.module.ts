import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentsGuard } from '../guards/students.guard';
import { FormGuard } from './../guards/form.guard';

import { StudentResolver } from './students-detail/student.resolver';

import { StudentsFormComponent } from './students-form/students-form.component';
import { StudentsDetailComponent } from './students-detail/students-detail.component';
import { StudentsComponent } from './students.component';

const studentsRoutes: Routes = [
  {
    path: '',
    component: StudentsComponent,
    // canActivateChild: [StudentsGuard],
    children: [
      {
        path: ':id',
        component: StudentsDetailComponent,
        resolve: { student: StudentResolver },
      },
      {
        path: ':id/editar',
        component: StudentsFormComponent,
        canDeactivate: [FormGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(studentsRoutes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
