import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCardModule} from '@angular/material/card';

import { CoursesRoutingModule } from './courses-routing.module';

import { CoursesComponent } from './courses.component';
import { CoursesDetailComponent } from './courses-detail/courses-detail.component';



@NgModule({
  declarations: [
    CoursesComponent,
    CoursesDetailComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    CoursesRoutingModule,
  ]
})
export class CoursesModule { }
