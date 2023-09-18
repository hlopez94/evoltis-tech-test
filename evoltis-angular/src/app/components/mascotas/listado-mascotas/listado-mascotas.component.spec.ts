import { ComponentFixture, TestBed } from '@angular/core/testing';
import '@angular/common/locales/global/es';
import { ListadoMascotasComponent } from './listado-mascotas.component';
import { TableModule } from 'primeng/table';
import { EdadPipeModule } from 'src/app/shared/pipes/edad.pipe.module';
import { mascotasReducer } from 'src/app/states/mascotas/mascotas.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MascotasEffects } from 'src/app/states/mascotas/mascotas.effects';
import { LOCALE_ID } from '@angular/core';
import { MASCOTAS_SERVICE_TOKEN } from 'src/app/model/interfaces/IMascotasService';
import { MascotasServiceMock } from 'src/app/servicios/mascotas.service.mock';

describe('ListadoMascotasComponent', () => {
  let component: ListadoMascotasComponent;
  let fixture: ComponentFixture<ListadoMascotasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadoMascotasComponent], imports: [
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
    fixture = TestBed.createComponent(ListadoMascotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
