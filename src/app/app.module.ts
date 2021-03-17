import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormularioClienteComponent } from './formulario-cliente/formulario-cliente.component';
import { ListProductsComponent } from './app/list-products/list-products.component';
import { LoginClienteComponent } from './login-cliente/login-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioClienteComponent,
    ListProductsComponent,
    LoginClienteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
