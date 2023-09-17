import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Mascota } from '../../model/clases/mascota.model';
import * as MascotasActions from './mascotas.actions';

export interface MascotasState extends EntityState<Mascota> {}

export const adapter: EntityAdapter<Mascota> = createEntityAdapter<Mascota>();

export const estadoInicial: MascotasState = adapter.getInitialState();

export const mascotasReducer = createReducer(
  estadoInicial,
  on(MascotasActions.agregarMascota,
    (state, { mascota }) =>
      adapter.addOne(mascota, state)
  ),
  on(MascotasActions.modificarMascota,
    (state, { update }) =>
      adapter.updateOne(update, state)
  ),
  on(MascotasActions.bajaMascota,
    (state, { id }) =>
      adapter.removeOne(id, state)
  ),
  on(MascotasActions.mascotasCargadas,
    (state, { mascotas }) =>
      adapter.setAll(mascotas, state)
  )
);
