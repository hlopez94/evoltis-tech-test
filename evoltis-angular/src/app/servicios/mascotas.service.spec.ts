import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { MascotasService } from './mascotas.service';
import { Mascota } from '../model/clases/mascota.model';
import { environment } from 'src/environments/environment';
import { RouterTestingModule } from '@angular/router/testing';
describe('MascotasService', () => {
  let service: MascotasService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [MascotasService],
    });

    service = TestBed.inject(MascotasService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve mascotas from the API', () => {
    const mockMascotas: Mascota[] = [
      {
        id: 1,
        fechaNacimiento: new Date(),
        nombre: 'Mascota1',
        peso: 5.5,
        raza: 'Raza1',
        tipo: 'Perro',
        vacunas: [],
      },
      {
        id: 2,
        fechaNacimiento: new Date(),
        nombre: 'Mascota2',
        peso: 7.2,
        raza: 'Raza2',
        tipo: 'Gato',
        vacunas: [],
      },
    ];

    service.obtenerMascotas().subscribe((mascotas) => {
      expect(mascotas).toEqual(mockMascotas);
    });

    const req = httpTestingController.expectOne(
      `${environment.apiUrl}/mascotas`
    );
    expect(req.request.method).toBe('GET');

    req.flush(mockMascotas);

    httpTestingController.verify();
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
