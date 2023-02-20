import { Component } from '@angular/core';
import { first, Observable } from 'rxjs';
import { ClientesService } from 'src/app/cliente/services/clientes.service';

import { Cliente } from '../models/cliente';

@Component({
  selector: 'app-courses',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent {

  clients: Observable<Cliente[]>;
  displayedColumns = ['id', 'nome', 'dataNasc', 'telefone', 'email'];


  constructor(clienteService: ClientesService) {
      this.clients = clienteService.listar();
  }
}
