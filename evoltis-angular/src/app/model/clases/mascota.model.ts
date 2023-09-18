export interface Mascota {
  id: number;
  nombre: string;
  vacunas: Vacuna[];
  peso: number;
  raza: string;
  tipo: string;
  fechaNacimiento: Date;
}

export interface Vacuna {
  fechaAplicacion: Date;
  fechaProximaAplicacion: Date;
  nombre: string;
}
