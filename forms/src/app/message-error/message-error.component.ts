import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { FormValidations } from './../data-form/form-validations';

@Component({
  selector: 'app-message-error',
  templateUrl: './message-error.component.html',
  styleUrls: ['./message-error.component.css']
})
export class MessageErrorComponent implements OnInit {

  @Input() control: FormControl;
  @Input() label: string;

  constructor() { }

  ngOnInit(): void {
  }

  get errorMessage(): any {
    for (const propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        return FormValidations.getErrormessage(this.label, propertyName, this.control.errors[propertyName]);
      }
    }

    return null;
  }

}
