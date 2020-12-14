import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { FormValidations } from './form-validations';

import { FormsService } from './../template-form/forms.service';
import { DropdownService } from './dropdown.service';

import { StateDataModel } from './state-data.model';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  form: FormGroup;
  states: Observable<StateDataModel[]>;
  positions: any[];
  technologies: any[];
  newsletter: any[];
  frameworks = ['React', 'Angular', 'VueJS', 'Ionic'];

  constructor(
    private formBuilder: FormBuilder,
    private formsService: FormsService,
    private dropDownService: DropdownService) { }

  ngOnInit(): void {
    this.states = this.dropDownService.getBrazilStates();
    this.positions = this.dropDownService.getPositions();
    this.technologies = this.dropDownService.getTechnologies();
    this.newsletter = this.dropDownService.getNewsletter();

    // this.dropDownService.getBrazilStates().subscribe(data => {
    //   this.states = data;
    // });

    // this.form = new FormGroup({
    //   name: new FormControl(null),
    //   email: new FormControl(null),
    // });

    this.form = this.formBuilder.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      confirmEmail: [null, [FormValidations.equalTo('email')]],
      position: [null],
      technology: [null],
      newsletter: ['S'],
      terms: [false, [Validators.pattern('true')]],
      frameworks: this.buildFrameworks(),
      address: this.formBuilder.group({
        cep: [null, [Validators.required, FormValidations.cepValidator]],
        street: [null, [Validators.required]],
        complement: [null],
        number: [null, [Validators.required]],
        neighborhood: [null, [Validators.required]],
        city: [null, [Validators.required]],
        uf: [null, [Validators.required]],
      }),
    });
  }

  buildFrameworks(): any {
    const values = this.frameworks.map(value => new FormControl(false));

    return this.formBuilder.array(values, FormValidations.requiredMinCheckbox(1));
  }

  onSubmit(): void {
    console.log(this.form.value);
    if (this.form.valid) {
      this.formsService.post(JSON.stringify(this.form.value)).subscribe(() => {
        alert('Enviado com sucesso!');
        this.formReset();
      },
      (error) => {
        alert(error.message);
      });
    } else {
      this.verifyValidForm(this.form);
    }

  }

  verifyValidForm(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach((input: any) => {
      const control = formGroup.get(input);
      control.markAsTouched();

      if (control instanceof FormGroup) {
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

  getAdress(): any {
    let cep = this.form.get('address.cep').value;

    // Nova variável "cep" somente com dígitos.

    if (cep !== '') {
      cep = cep.replace(/\D/g, '');
      // Expressão regular para validar o CEP.
      const validacep = /^[0-9]{8}$/;

      // Valida o formato do CEP.
      if (validacep.test(cep)) {
        this.formsService.getCep(cep).subscribe(data => {
          this.formPopulate(data);
        });
      } else {
        alert('Formato de CEP inválido.');
      }
    }
  }

  formPopulate(data: any): void {
    this.form.patchValue({
      address: {
        street: data.logradouro,
        neighborhood: data.bairro,
        city: data.localidade,
        uf: data.uf,
      } ,
    });
  }

}
