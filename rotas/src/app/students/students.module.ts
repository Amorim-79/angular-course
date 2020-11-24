import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

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
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    StudentsRoutingModule
  ]
})
export class StudentsModule { }
