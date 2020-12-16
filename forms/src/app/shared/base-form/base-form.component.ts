import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-base-form',
  template: '<div></div>',
})
export abstract class BaseFormComponent implements OnInit {

  form: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  abstract submit(): any;

  onSubmit(): void {
    if (this.form.valid) {
      this.submit();
    } else {
      this.verifyValidForm(this.form);
    }
  }

  verifyValidForm(formGroup: FormGroup | FormArray): void {
    Object.keys(formGroup.controls).forEach((input: any) => {
      const control = formGroup.get(input);
      control.markAsTouched();

      if (control instanceof FormGroup || control instanceof FormArray) {
        this.verifyValidForm(control);
      }
    });
  }

  formReset(): void {
    this.form.reset();
  }

  verifyValidTouched(input: any): any {
    return !this.form.get(input).valid && this.form.get(input).touched;
  }

  applyCssError(input: any): any {
    return {
      'was-validated': this.verifyValidTouched(input),
      'text-danger': this.verifyValidTouched(input),
    };
  }

}
