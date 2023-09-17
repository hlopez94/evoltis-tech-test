import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MascotasRoutingModule } from './mascotas-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListadoMascotasComponent } from './listado-mascotas/listado-mascotas.component';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    DashboardComponent,
    ListadoMascotasComponent
  ],
  imports: [
    CommonModule,
    MascotasRoutingModule,
    TableModule
  ]
})
export class MascotasModule { }
