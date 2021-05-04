import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListClienteComponent } from "./list-cliente/list-cliente.component";
import { LoginClienteComponent } from "./login-cliente/login-cliente.component";
import { FormularioClienteComponent } from "./formulario-cliente/formulario-cliente.component";


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login-cliente' },
  { path: 'login-cliente', component: LoginClienteComponent },
  { path: 'list-cliente', component: ListClienteComponent },
  { path: 'formulario-cliente', component: FormularioClienteComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
