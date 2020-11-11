import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';
import { NgcontentComponent } from './ngcontent/ngcontent.component';
import { DiretivasCustomizadasComponent } from './diretivas-customizadas/diretivas-customizadas.component';
import { OperadorElvisComponent } from './operador-elvis/operador-elvis.component';
import { FundoAmareloDirective } from './shared/fundo-amarelo.directive';
import { HighlightMouseDirective } from './shared/highlight-mouse.directive';
import { NgelseDirective } from './shared/ngelse.directive';

@NgModule({
  declarations: [
    AppComponent,
    NgifComponent,
    NgswitchComponent,
    NgforComponent,
    NgclassComponent,
    NgstyleComponent,
    NgcontentComponent,
    OperadorElvisComponent,
    DiretivasCustomizadasComponent,
    FundoAmareloDirective,
    HighlightMouseDirective,
    NgelseDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
