import { ComponentFixture, TestBed } from '@angular/core/testing';
import '@angular/common/locales/global/es';
import { DashboardComponent } from './dashboard.component';
import { MASCOTAS_SERVICE_TOKEN } from 'src/app/model/interfaces/IMascotasService';
import { MascotasServiceMock } from 'src/app/servicios/mascotas.service.mock';
import { MascotasEffects } from 'src/app/states/mascotas/mascotas.effects';
import { mascotasReducer } from 'src/app/states/mascotas/mascotas.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { LOCALE_ID } from '@angular/core';
import { ListadoMascotasComponent } from '../listado-mascotas/listado-mascotas.component';
import { TableModule } from 'primeng/table';
import { EdadPipeModule } from 'src/app/shared/pipes/edad.pipe.module';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent, ListadoMascotasComponent],
      imports: [
        TableModule,
        EdadPipeModule,
        StoreModule.forRoot({ mascotas: mascotasReducer }),
        EffectsModule.forRoot([MascotasEffects]),
      ],
      providers: [
        { provide: LOCALE_ID, useValue: 'es-AR' },
        { provide: MASCOTAS_SERVICE_TOKEN, useClass: MascotasServiceMock },
      ],
    });
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
