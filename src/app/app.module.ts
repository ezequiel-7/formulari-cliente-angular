import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormularioClienteComponent } from './formulario-cliente/formulario-cliente.component';
import { LoginClienteComponent } from './login-cliente/login-cliente.component';
import { ListClienteComponent } from './list-cliente/list-cliente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RascunhoAngularComponent } from './rascunho-angular/rascunho-angular.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioClienteComponent,
    LoginClienteComponent,
    ListClienteComponent,
    RascunhoAngularComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
