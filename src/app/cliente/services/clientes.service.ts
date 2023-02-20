import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, Observable } from 'rxjs';
import { Cliente } from 'src/app/clientes/models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {


  constructor(private http: HttpClient) {

   }

   listar() {
      return this.http.get<Cliente[]>('http://localhost:8080/clientes').pipe(
        first()
      );
   }
}
