import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { CoursesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './clientes/clientes.component';

@NgModule({
  declarations: [
    ClientesComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MatCardModule,
    MatToolbarModule,
    MatTableModule

  ]
})
export class ClientesModule { }
