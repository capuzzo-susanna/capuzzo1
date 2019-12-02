import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PuntoUnoComponent } from './punto-uno/punto-uno.component';
import { PuntoDueComponent } from './punto-due/punto-due.component';
import { PuntoTreComponent } from './punto-tre/punto-tre.component';

@NgModule({
  declarations: [
    AppComponent,
    PuntoUnoComponent,
    PuntoDueComponent,
    PuntoTreComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
