import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnidadMedidaPage } from './unidad-medida.page';

const routes: Routes = [
  {
    path: '',
    component: UnidadMedidaPage
  },
  {
    path: 'unidad-medida-form',
    loadChildren: () => import('../unidad-medida-form/unidad-medida-form.module').then( m => m.UnidadMedidaFormPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnidadMedidaPageRoutingModule {}
