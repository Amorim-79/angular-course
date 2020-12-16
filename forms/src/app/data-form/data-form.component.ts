import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EMPTY, Observable } from 'rxjs';
import { distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';

import { BaseFormComponent } from './../shared/base-form/base-form.component';
import { FormValidations } from './form-validations';

import { FormsService } from './../template-form/forms.service';
import { DropdownService } from './dropdown.service';
import { VerifyEmailService } from './services/verify-email.service';

import { StateDataModel } from './state-data.model';
import { CityDataModel } from './city-data.model';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent extends BaseFormComponent implements OnInit {

  states: StateDataModel[];
  cities: CityDataModel[];
  positions: any[];
  technologies: any[];
  newsletter: any[];
  frameworks = ['React', 'Angular', 'VueJS', 'Ionic'];

  constructor(
    private formBuilder: FormBuilder,
    private formsService: FormsService,
    private dropDownService: DropdownService,
    private verifyEmailService: VerifyEmailService
  ) {
      super();
    }

  ngOnInit(): void {
    // this.verifyEmailService.verifyEmail('email@email.com').subscribe(response => {
    //   console.log(response);
    // });

    this.dropDownService.getBrazilStates().subscribe(data => this.states = data);
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
      name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      email: [null, [Validators.required, Validators.email], [this.validEmail.bind(this)]],
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

    this.form.get('address.cep').statusChanges
      .pipe(
        distinctUntilChanged(),
        switchMap(status => status === 'VALID' ? this.formsService.getCep(this.form.get('address.cep').value) : EMPTY)
      ).subscribe(data => data ? this.formPopulate(data) : {});

    this.form.get('address.uf').valueChanges
      .pipe(
        map(state => this.states.filter(item => item.sigla === state)),
        map(states => states && states.length > 0 ? states[0].id : EMPTY ),
        switchMap((idState: number) => this.dropDownService.getCities(idState)),
      ).subscribe(cities => this.cities = cities);
  }

  buildFrameworks(): any {
    const values = this.frameworks.map(() => new FormControl(false));

    return this.formBuilder.array(values, FormValidations.requiredMinCheckbox(1));
  }

  submit(): void {
    this.formsService.post(JSON.stringify(this.form.value)).subscribe(() => {
      alert('Enviado com sucesso!');
      this.formReset();
    },
    (error) => {
      alert(error.message);
    });
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

  validEmail(formControl: FormControl): any {
    return this.verifyEmailService.verifyEmail(formControl.value).pipe(
      map(response => response ? { emailExists: true } : null)
    );
  }

}
