import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { HttpClientModule } from '@angular/common/http';
import { MessageErrorComponent } from './message-error/message-error.component';
import { DataFormComponent } from './data-form/data-form.component';
import { InputFieldComponent } from './data-form/input-field/input-field.component';
import { BaseFormComponent } from './shared/base-form/base-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    MessageErrorComponent,
    DataFormComponent,
    InputFieldComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
