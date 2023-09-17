
import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Mascota } from '../../model/clases/mascota.model';

export const agregarMascota = createAction(
  '[Mascota] Agregar Mascota',
  props<{ mascota: Mascota }>()
);

export const mascotaAgregada = createAction('[Mascota] Mascota Agregada', props<{ mascota: Mascota }>());

export const modificarMascota = createAction(
  '[Mascotas] Actualizar Mascota',
  props<{ update: Update<Mascota> }>()
);

export const bajaMascota = createAction(
  '[Mascotas] Eliminar Mascota',
  props<{ id: number }>()
);

export const cargarMascotas = createAction('[Mascotas] Cargar Mascotas');
export const mascotasCargadas = createAction('[Mascotas] Mascotas Cargadas', props<{ mascotas: Mascota[] }>());
export const mascotasConError = createAction('[Mascotas] Error', props<{ error: Error }>());
