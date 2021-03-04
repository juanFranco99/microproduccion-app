import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmbalajeFormPage } from './embalaje-form.page';

const routes: Routes = [
  {
    path: '',
    component: EmbalajeFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmbalajeFormPageRoutingModule {}
