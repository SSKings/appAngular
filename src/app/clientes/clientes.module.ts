import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { ClientesFormComponent } from './clientes-form/clientes-form.component';
import { CoursesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './clientes/clientes.component';

@NgModule({
  declarations: [
    ClientesComponent,
    ClientesFormComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MatCardModule,
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class ClientesModule { }
