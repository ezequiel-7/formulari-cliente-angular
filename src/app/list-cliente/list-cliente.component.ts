import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-cliente',
  templateUrl: './list-cliente.component.html',
  styleUrls: ['./list-cliente.component.scss']
})
export class ListClienteComponent implements OnInit {

  public listCliente = [
    'lorem ipsun'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}