import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmbalajeFormPageRoutingModule } from './embalaje-form-routing.module';

import { EmbalajeFormPage } from './embalaje-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmbalajeFormPageRoutingModule
  ],
  declarations: [EmbalajeFormPage]
})
export class EmbalajeFormPageModule {}
