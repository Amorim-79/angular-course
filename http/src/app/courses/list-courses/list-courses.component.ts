import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, EMPTY, Subject } from 'rxjs';
import { catchError, take, switchMap } from 'rxjs/operators';
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
  deleteModalRef: BsModalRef;
  @ViewChild('deleteModal') deleteModal;

  courses$: Observable<ICourseDataModel[]>;
  error$ = new Subject<boolean>();

  selectedCourse: ICourseDataModel;

  constructor(
    private modalService: BsModalService,
    private coursesService: CoursesService,
    private alertModalService: AlertModalService,
    private router: Router,
    private route: ActivatedRoute,
    ) { }

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

  onEdit(id): void {
    this.router.navigate(['edit', id], { relativeTo: this.route });
  }

  onDelete(course: ICourseDataModel): void {
    this.selectedCourse = course;
    // this.deleteModalRef = this.modalService.show(this.deleteModal, { class: 'modal-sm' });

    const result$ = this.alertModalService.showConfirm('Confirmação', 'Tem certeza que deseja remover esse curso?');
    result$.asObservable().pipe(
      take(1),
      switchMap(result => result ? this.coursesService.remove(course.id): EMPTY)
    )
    .subscribe(
      success => {
        this.alertModalService.showAlertSuccess('Curso apagado com sucesso');
        this.onRefresh();
      },
      error => {
        this.alertModalService.showAlertDanger('Erro ao apagar curso, tente novamente');
      }
    );
  }

  onConfirmDelete() {
    this.coursesService.remove(this.selectedCourse.id).subscribe(
      success => {
        this.alertModalService.showAlertSuccess('Curso apagado com sucesso');
        this.onRefresh();
      },
      error => {
        this.alertModalService.showAlertDanger('Erro ao apagar curso, tente novamente');
      }
    );
  }

  onDeclineDelete() {
    this.deleteModalRef.hide();
  }

  handleError() {
    this.alertModalService.showAlertDanger('Error ao carregar cursos, tente novamente mais tarde.');
    // this.bsModalRef = this.modalService.show(AlertModalComponent);
    // this.bsModalRef.content.type = 'danger';
    // this.bsModalRef.content.message = 'Error ao carregar cursos, tente novamente mais tarde.';
  }

}
