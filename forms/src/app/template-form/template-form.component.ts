import { Component, OnInit } from '@angular/core';

import { FormsService } from './forms.service';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  constructor(private formsService: FormsService) { }

  ngOnInit(): void {
  }

  verifyValidTouched(input: any): any {
    return !input.valid && input.touched;
  }

  applyCssError(input: any): any {
    return {
      'was-validated': this.verifyValidTouched(input),
      'text-danger': this.verifyValidTouched(input),
    };
  }

  getAdress(cep: any, form: any): any {
    // Nova variável "cep" somente com dígitos.
    cep = cep.replace(/\D/g, '');

    if (cep !== '') {
      // Expressão regular para validar o CEP.
      const validacep = /^[0-9]{8}$/;

      // Valida o formato do CEP.
      if (validacep.test(cep)) {
        this.formsService.getCep(cep).subscribe(data => {
          this.formPopulate(data, form);
        });
      } else {
        alert('Formato de CEP inválido.');
      }
    }
  }

  formPopulate(data: any, formData: any): void {
    formData.form.patchValue({
      adress: {
        street: data.logradouro,
        neighborhood: data.bairro,
        city: data.localidade,
        uf: data.uf,
      } ,
    });
  }

  onSubmit(formData: any): void {
    this.formsService.post(formData.value).subscribe(state => {
      alert('Enviado com sucesso!');
    });
  }

}
