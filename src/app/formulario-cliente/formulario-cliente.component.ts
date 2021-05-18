import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-cliente',
  templateUrl: './formulario-cliente.component.html',
  styleUrls: ['./formulario-cliente.component.scss']
})
export class FormularioClienteComponent implements OnInit {

  public formClient: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.formClient = this.formBuilder.group({
      nome: [null, [Validators.required, ]],
      rg: [null, [Validators.required, ]],
      cpf: [null, [
        Validators.required, 
        Validators.minLength(11), 
        Validators.maxLength(14), 
        Validators.pattern(/\d{3}[.]\d{3}[.]\d{3}[-]\d{2}/) 
      ]],
      endereco: [null, [Validators.required, ]],
      telefone: [null, [Validators.required, ]],
      dataDeNascimento: [null, [Validators.required, ]],
      email: [null, [Validators.required, ]] 
    });

  }

  ngOnInit(): void {
  }

  cadastrarCliente() {
    console.log(this.formClient);
  }

}
