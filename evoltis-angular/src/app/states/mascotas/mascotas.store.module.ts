import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MascotasEffects } from './mascotas.effects';
import { mascotasReducer } from './mascotas.reducer';

@NgModule({
  imports: [
    StoreModule.forRoot({ mascotas: mascotasReducer }),
    EffectsModule.forRoot([MascotasEffects]),
  ],
  exports:[
  ]
})
export class MascotasStoreModule {}
