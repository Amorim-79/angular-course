import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CoursesRoutingModule } from './courses-routing.module';
import { ListCoursesComponent } from './list-courses/list-courses.component';
import { FormCoursesComponent } from './form-courses/form-courses.component';


@NgModule({
  declarations: [ListCoursesComponent, FormCoursesComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    ReactiveFormsModule,
  ]
})
export class CoursesModule { }
