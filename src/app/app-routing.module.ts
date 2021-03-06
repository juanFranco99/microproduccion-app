import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'unidad-medida',
    loadChildren: () => import('./screens/unidad-medida/unidad-medida.module').then( m => m.UnidadMedidaPageModule)
  },
  {
    path: 'unidad-medida-form',
    loadChildren: () => import('./screens/unidadMedida/unidad-medida-form/unidad-medida-form.module').then( m => m.UnidadMedidaFormPageModule)
  },
  {
    path: 'unidad-medida-form/:codigo',
    loadChildren: () => import('./screens/unidadMedida/unidad-medida-form/unidad-medida-form.module').then( m => m.UnidadMedidaFormPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
