import { InjectionToken } from '@angular/core';
import { Mascota } from '../clases/mascota.model';
import { Observable } from 'rxjs';

export const MASCOTAS_SERVICE_TOKEN = new InjectionToken<IMascotasService>('mascotasService');

export interface IMascotasService {
  obtenerMascotas(): Observable<Mascota[]>;
  agregarMascota(mascota: Mascota): Observable<Mascota>;
  guardarMascota(mascota: Mascota): Observable<Mascota>;
  bajaMascota(idMascota: number): Observable<void>;
}
