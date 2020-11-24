import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';

import { StudentsRoutingModule } from './students-routing.module';

import { StudentsComponent } from './students.component';
import { StudentsDetailComponent } from './students-detail/students-detail.component';
import { StudentsFormComponent } from './students-form/students-form.component';



@NgModule({
  declarations: [
    StudentsComponent,
    StudentsDetailComponent,
    StudentsFormComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    StudentsRoutingModule
  ]
})
export class StudentsModule { }
