import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmbalajeListPage } from './embalaje-list.page';

const routes: Routes = [
  {
    path: '',
    component: EmbalajeListPage
  },
  {
    pathMatch: 'embalaje-form',
    loadChildren: ()=> import('../embalaje-form/embalaje-form.module').then(m=> m.EmbalajeFormPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmbalajeListPageRoutingModule {}
