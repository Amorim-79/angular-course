import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentsFormComponent } from './students-form/students-form.component';
import { StudentsDetailComponent } from './students-detail/students-detail.component';
import { StudentsComponent } from './students.component';

const studentsRoutes: Routes = [
  {
    path: '',
    component: StudentsComponent,
    children: [
      {
        path: ':id',
        component: StudentsDetailComponent,
      },
      {
        path: ':id/editar',
        component: StudentsFormComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(studentsRoutes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
