import { Component, OnInit } from '@angular/core';
import { Observable, EMPTY, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { AlertModalService } from './../../shared/alert-modal.service';
import { CoursesService } from '../courses.service';

import { ICourseDataModel } from '../course-data.model';

// import { AlertModalComponent } from './../../shared/alert-modal/alert-modal.component';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css'],
  preserveWhitespaces: true,
})
export class ListCoursesComponent implements OnInit {

  // courses: ICourseDataModel[];

  bsModalRef: BsModalRef;

  courses$: Observable<ICourseDataModel[]>;
  error$ = new Subject<boolean>();

  constructor(
    private coursesService: CoursesService,
    // private modalService: BsModalService
    private alertModalService: AlertModalService) { }

  ngOnInit(): void {
    // this.coursesService.list().subscribe(response => this.courses = response);
    this.onRefresh();
  }

  onRefresh() {
    this.courses$ = this.coursesService.list()
      .pipe(
        catchError(error => {
          console.error(error);
          // this.error$.next(true);
          this.handleError();
          return EMPTY
        } )
      );
  }

  handleError() {
    this.alertModalService.showAlertDanger('Error ao carregar cursos, tente novamente mais tarde.');
    // this.bsModalRef = this.modalService.show(AlertModalComponent);
    // this.bsModalRef.content.type = 'danger';
    // this.bsModalRef.content.message = 'Error ao carregar cursos, tente novamente mais tarde.';
  }

}
