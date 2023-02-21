import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  displayedColumns = ['id', 'nome', 'dataNasc', 'telefone', 'email', 'actions'];


  constructor(clienteService: ClientesService,
    private router: Router,
    private route: ActivatedRoute
      ) {

      this.clients = clienteService.listar();
  }

  onAdd() {
     this.router.navigate(['new'], {relativeTo: this.route});
    ;
  }
}
