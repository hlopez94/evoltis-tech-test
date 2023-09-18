import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MascotasRoutingModule } from './mascotas-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListadoMascotasComponent } from './listado-mascotas/listado-mascotas.component';
import { TableModule } from 'primeng/table';
import { EdadPipeModule } from 'src/app/shared/pipes/edad.pipe.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { mascotasReducer } from 'src/app/states/mascotas/mascotas.reducer';
import { MascotasEffects } from 'src/app/states/mascotas/mascotas.effects';
import { environment } from 'src/environments/environment';
import { MascotasServiceMock } from 'src/app/servicios/mascotas.service.mock';
import { MASCOTAS_SERVICE_TOKEN } from 'src/app/model/interfaces/IMascotasService';

@NgModule({
  declarations: [
    DashboardComponent, 
    ListadoMascotasComponent,
  ],
  imports: [
    CommonModule,
    MascotasRoutingModule,
    TableModule,
    EdadPipeModule,
    StoreModule.forRoot({mascotas: mascotasReducer}), 
    EffectsModule.forRoot([MascotasEffects])
  ],
  providers: [
    { provide: MASCOTAS_SERVICE_TOKEN, useClass: MascotasServiceMock}]
})
export class MascotasModule { }
