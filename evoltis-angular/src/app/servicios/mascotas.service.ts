import { Injectable } from '@angular/core';
import { Mascota } from '../model/clases/mascota.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IMascotasService } from '../model/interfaces/IMascotasService';

@Injectable({
  providedIn: 'root',
})
export class MascotasService implements IMascotasService{

  constructor(private httpClient: HttpClient) {}

  agregarMascota(mascota: Mascota): Observable<Mascota> {
    return this.httpClient.post<Mascota>(`${environment.apiUrl}/mascotas/`, mascota);
  }

  guardarMascota(mascota: Mascota): Observable<Mascota> {
    return this.httpClient.put<Mascota>(`${environment.apiUrl}/mascotas/${mascota.id}`, mascota);
  }

  bajaMascota(idMascota: number): Observable<void> {
    return this.httpClient.delete<void>(`${environment.apiUrl}/mascotas/${idMascota}`);
  }

  obtenerMascotas(): Observable<Mascota[]> {
    return this.httpClient.get<Mascota[]>(`${environment.apiUrl}/mascotas`);
  }
}


