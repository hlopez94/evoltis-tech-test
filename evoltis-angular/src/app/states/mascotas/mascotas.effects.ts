// mascotas.effects.ts
import { Inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as MascotasActions from './mascotas.actions';
import { IMascotasService, MASCOTAS_SERVICE_TOKEN } from 'src/app/model/interfaces/IMascotasService';

@Injectable()
export class MascotasEffects {

  constructor(
    private actions$: Actions,
    @Inject(MASCOTAS_SERVICE_TOKEN) private mascotasService: IMascotasService
  ) {}

  agregarMascota$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MascotasActions.agregarMascota),
      switchMap(({ mascota }) =>
        this.mascotasService.agregarMascota(mascota).pipe(
          map(() => MascotasActions.mascotaAgregada({ mascota })),
          catchError((error) => of(MascotasActions.mascotasConError({ error })))
        )
      )
    )
  );

  cargarMascotas$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MascotasActions.cargarMascotas),
      switchMap(() =>
        this.mascotasService.obtenerMascotas().pipe(
          map((mascotas) => MascotasActions.mascotasCargadas({ mascotas })),
          catchError((error) => of(
            MascotasActions.mascotasConError(error)
          ))
        )
      )
    )
  );

}
