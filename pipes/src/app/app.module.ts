import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PipeExamplesComponent } from './pipe-examples/pipe-examples.component';
import { CamelcasePipe } from './shared/camelcase.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PipeExamplesComponent,
    CamelcasePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
