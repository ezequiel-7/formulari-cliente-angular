import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormularioClienteComponent } from './formulario-cliente/formulario-cliente.component';
import { LoginClienteComponent } from './login-cliente/login-cliente.component';
import { ListClienteComponent } from './list-cliente/list-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioClienteComponent,
    LoginClienteComponent,
    ListClienteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
