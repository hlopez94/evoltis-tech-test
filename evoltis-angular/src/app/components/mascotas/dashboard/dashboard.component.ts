import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as MascotasActions from 'src/app/states/mascotas/mascotas.actions';
import { selectTodasLasMascotas } from 'src/app/states/mascotas/mascotas.selector';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public mascotas$ = this.store.pipe(select(selectTodasLasMascotas));
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(MascotasActions.cargarMascotas());
    
    this.store.pipe(
      filter((action : any) => action.type === MascotasActions.mascotaAgregada.type)
    ).subscribe(()=> MascotasActions.cargarMascotas())
    this.store.pipe(
      filter((action : any) => action.type === MascotasActions.mascotasConError.type)
    ).subscribe((err)=> console.log('Algo no anduvo'))
  }

  agregarMascotas() {
    var mockMascotas = [
      {
        id: 1,
        fechaNacimiento: new Date(),
        nombre: 'Mascota1',
        peso: 5.5,
        raza: 'Raza1',
        tipo: 'Perro',
        edad: 2,
        vacunas: [],
      },
      {
        id: 2,
        fechaNacimiento: new Date(),
        nombre: 'Mascota2',
        peso: 7.2,
        raza: 'Raza2',
        tipo: 'Gato',
        edad: 3,
        vacunas: [],
      },
    ];

    mockMascotas.forEach((mas) =>
      this.store.dispatch(MascotasActions.agregarMascota({ mascota: mas }))
    );
  }
}
