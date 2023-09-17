import { Injectable } from '@angular/core';
import { Mascota } from '../model/clases/mascota.model';
import { Observable, of } from 'rxjs';
import { IMascotasService } from '../model/interfaces/IMascotasService';
const storageKey = 'MASCOTAS';

@Injectable({
  providedIn: 'root',
})
export class MascotasServiceMock implements IMascotasService {
  private mascotas: Mascota[] = [];

  public constructor() {
    localStorage.getItem(storageKey);
  }

  agregarMascota(mascota: Mascota): Observable<Mascota> {
    //mascota.id = this.mascotas.length + 1;
    this.mascotas = [...this.mascotas, mascota];
    this.guardarMascotasEnLocalStorage();
    return of(mascota);
  }

  guardarMascota(mascota: Mascota): Observable<Mascota> {
    const index = this.mascotas.findIndex((m) => m.id === mascota.id);
    if (index !== -1) {
      this.mascotas[index] = mascota;
      this.guardarMascotasEnLocalStorage();
    } else {
      throw new Error('Mascota no encontrada');
    }

    return of(this.mascotas[index]);
  }

  bajaMascota(idMascota: number): Observable<void> {
    const index = this.mascotas.findIndex((m) => m.id === idMascota);
    if (index !== -1) {
      this.mascotas.splice(index, 1);
      this.guardarMascotasEnLocalStorage();
    }
    return of();
  }

  obtenerMascotas(): Observable<Mascota[]> {
    return of(this.mascotas);
  }

  private guardarMascotasEnLocalStorage(): void {
    localStorage.setItem(storageKey, JSON.stringify(this.mascotas));
  }
}
