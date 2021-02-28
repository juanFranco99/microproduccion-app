import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnidadMedidaFormPageRoutingModule } from './unidad-medida-form-routing.module';

import { UnidadMedidaFormPage } from './unidad-medida-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnidadMedidaFormPageRoutingModule
  ],
  declarations: [UnidadMedidaFormPage]
})
export class UnidadMedidaFormPageModule {}
