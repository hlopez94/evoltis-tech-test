import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MascotasRoutingModule } from './mascotas-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListadoMascotasComponent } from './listado-mascotas/listado-mascotas.component';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { EdadPipeModule } from 'src/app/shared/pipes/edad.pipe.module';
import { MascotasServiceMock } from 'src/app/servicios/mascotas.service.mock';
import { MASCOTAS_SERVICE_TOKEN } from 'src/app/model/interfaces/IMascotasService';
import { CrearMascotaComponent } from './crear-mascota/crear-mascota.component';
import { TablaPoseeFiltroPipeModule } from 'src/app/shared/pipes/tabla-posee-filtro.pipe.module';

@NgModule({
  declarations: [
    DashboardComponent, 
    ListadoMascotasComponent, CrearMascotaComponent,
  ],
  imports: [
    CommonModule,
    MascotasRoutingModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    EdadPipeModule,
    TablaPoseeFiltroPipeModule
  ],
  providers: [
    { provide: MASCOTAS_SERVICE_TOKEN, useClass: MascotasServiceMock}]
})
export class MascotasModule { }
