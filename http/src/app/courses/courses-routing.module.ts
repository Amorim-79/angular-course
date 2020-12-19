import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListCoursesComponent } from './list-courses/list-courses.component';
import { FormCoursesComponent } from './form-courses/form-courses.component';

const routes: Routes = [
  { path: '', component: ListCoursesComponent },
  { path: 'create', component: FormCoursesComponent },
  { path: 'edit/:id', component: FormCoursesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
