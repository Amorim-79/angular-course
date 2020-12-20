import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { map, switchMap } from 'rxjs/operators';

import { CoursesService } from '../courses.service';
import { AlertModalService } from './../../shared/alert-modal.service';

import { ICourseDataModel } from '../course-data.model';

@Component({
  selector: 'app-form-courses',
  templateUrl: './form-courses.component.html',
  styleUrls: ['./form-courses.component.css']
})
export class FormCoursesComponent implements OnInit {

  form: FormGroup
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private coursesService: CoursesService,
    private alertModalService: AlertModalService,
    private location: Location,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    // this.route.params.pipe(
    //   map((params: any) => params['id']),
    //   switchMap(id => this.coursesService.getById(id))
    // )
    // .subscribe(course => this.updateForm(course));

    // concatMap -> Ordem da requisição importa
    // mergeMap -> Ordem da requisição não importa
    // exhaustMap -> comum em casos de login, ele espera receber a respota da requisição anterior para iniciar a nova
    
    const course: ICourseDataModel = this.route.snapshot.data['course'];

    this.form = this.formBuilder.group({
      id: [course.id],
      name: [course.name, [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
    })
  }

  updateForm(course) {
    this.form.patchValue({
      id: course.id,
      name: course.name
    })
  }

  hasError(field: string) {
    return this.form.get(field).errors;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.valid) {
      let msgSuccess = 'Curso criado com sucesso';
      let msgError = 'Erro ao criar curso, tente novamente';

      if(this.form.value.id) {
        msgSuccess = 'Curso atualizado com sucesso';
        msgError = 'Erro ao atualizar curso, tente novamente';
      }

      this.coursesService.save(this.form.value).subscribe(() => {
        this.location.back();
        this.alertModalService.showAlertSuccess(msgSuccess);
      },
      (error: Error) => {
        this.alertModalService.showAlertDanger(msgError);
      }
      );
      
      // if (this.form.value.id) {
      //   // UPDATE
      //   this.coursesService.update(this.form.value).subscribe(() => {
      //     this.location.back();
      //     this.alertModalService.showAlertSuccess('Curso atualizado com sucesso');
      //   },
      //   (error: Error) => {
      //     this.alertModalService.showAlertDanger(error.message);
      //   }
      //   );
      // } else {
      //   // CREATE
      //   this.coursesService.create(this.form.value).subscribe(() => {
      //     this.location.back();
      //     this.alertModalService.showAlertSuccess('Curso criado com sucesso');
      //   },
      //   (error: Error) => {
      //     this.alertModalService.showAlertDanger(error.message);
      //   }
      //   );
      // }
    }
  }

  onCancel() {
    this.submitted = false;
    this.form.reset();
  }

}
