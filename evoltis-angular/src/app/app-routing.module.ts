import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'mascotas',
    pathMatch:'full'
  },
  {
    path: 'mascotas',
    loadChildren: () =>
      import('./components/mascotas/mascotas.module').then(
        (m) => m.MascotasModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
