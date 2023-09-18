import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { FilterMetadata } from 'primeng/api';
import { Table } from 'primeng/table';
import { Observable } from 'rxjs';
import { Mascota } from 'src/app/model/clases/mascota.model';
import { selectTodasLasMascotas } from 'src/app/states/mascotas/mascotas.selector';

@Component({
  selector: 'app-listado-mascotas',
  templateUrl: './listado-mascotas.component.html',
  styleUrls: ['./listado-mascotas.component.scss'],
})
export class ListadoMascotasComponent {
  public mascotas$: Observable<Mascota[]> = this.store.pipe(
    select(selectTodasLasMascotas)
  );

  constructor(private store: Store) {}

  verDetalle(mascota:Mascota){

  }
  baja(mascota:Mascota){
    
  }
  modificar(mascota:Mascota){
    
  }
}
