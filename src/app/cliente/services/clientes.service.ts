import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, Observable } from 'rxjs';
import { Cliente } from 'src/app/clientes/models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private readonly API = 'http://localhost:8080/clientes';

  constructor(private http: HttpClient) {

   }

   listar() {
      return this.http.get<Cliente[]>(this.API).pipe(
        first()
      );
   }

   salvar(cliente : Cliente) {
     this.http.post<Cliente>(this.API, cliente);
   }
}
