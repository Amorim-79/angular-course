import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { CoursesService } from '../courses.service';
import { AlertModalService } from './../../shared/alert-modal.service';

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
    ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
    })
  }

  hasError(field: string) {
    return this.form.get(field).errors;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.valid) {
      this.coursesService.create(this.form.value).subscribe(() => {
        this.location.back();
        this.alertModalService.showAlertSuccess('Curso criado com sucesso');
      },
      (error: Error) => {
        this.alertModalService.showAlertDanger(error.message);
      }
      );
    }
  }

  onCancel() {
    this.submitted = false;
    this.form.reset();
  }

}
