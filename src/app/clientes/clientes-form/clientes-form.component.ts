import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ClientesService } from '../../cliente/services/clientes.service';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.scss']
})
export class ClientesFormComponent {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private service: ClientesService) {

    this.form = this.formBuilder.group({
      nome: [null],
      dataNasc: [null],
      end: [null],
      cel: [null],
      email: [null]
    })
  }

  onSubmit() {
    this.service.salvar(this.form.value);
    ;
  }

  onCancel() {}

}
