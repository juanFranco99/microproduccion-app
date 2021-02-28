import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnidadMedidaFormPage } from './unidad-medida-form.page';

const routes: Routes = [
  {
    path: '',
    component: UnidadMedidaFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnidadMedidaFormPageRoutingModule {}
