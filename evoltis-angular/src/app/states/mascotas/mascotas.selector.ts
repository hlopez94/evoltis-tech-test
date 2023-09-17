import { createFeatureSelector, createSelector } from '@ngrx/store';
import { adapter, MascotasState } from './mascotas.reducer';

const selectMascotasState = createFeatureSelector<MascotasState>('mascotas');

export const selectTodasLasMascotas = createSelector(
  selectMascotasState,
  state => Object.values(adapter.getSelectors().selectAll(state))
);
