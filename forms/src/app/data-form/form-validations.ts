import { FormArray, FormControl, FormGroup } from '@angular/forms';

export class FormValidations {
    static requiredMinCheckbox(min = 1): any {
        const validator = (formArray: FormArray) => {
          // const values = formArray.controls;
          // let totalChecked = 0;
          // values.forEach((item) => {
          //   if (item.value) {
          //     totalChecked += 1;
          //   }
          // });
          const totalChecked = formArray.controls
            .map(value => value.value)
            .reduce((total, current) => current ? total + current : total, 0);
          return totalChecked >= min ? null : { required: true };
        };
        return validator;
      }

      static cepValidator(control: FormControl): any {
        const cep = control.value;

        if (cep && cep !== '') {
            const validacep = /^[0-9]{8}$/;
            return validacep.test(cep) ? null : { cepInvalid: true };
        }

        return null;
      }

      static equalTo(otherField: string): any {
        const validator = (formControl: FormControl) => {
            if (otherField == null) {
                throw new Error('É necessário informar um campo');
            }

            if (!formControl.root || !(formControl.root as FormGroup).controls) {
                return null;
            }

            const field = formControl.root.get(otherField);

            if (!field) {
                throw new Error('É necessário informar um campo válido');
            }

            if (field.value !== formControl.value) {
                return { equalsTo: otherField };
            }
            return null;
        };
        return validator;
      }

      static getErrormessage(fieldName: string, validatorName: string, validatorValue?: any): any {
        const config = {
          required: `${fieldName} é obrigatório.`,
          minlength: `${fieldName} precisa ter no mínimo ${validatorValue.requiredLength} caracteres.`,
          maxlength: `${fieldName} precisa ter no máximo ${validatorValue.requiredLength} caracteres.`,
          cepInvalid: 'CEP inválido',
        };

        return config[validatorName];
      }
}
