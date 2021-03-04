import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmbalajeListPageRoutingModule } from './embalaje-list-routing.module';

import { EmbalajeListPage } from './embalaje-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmbalajeListPageRoutingModule
  ],
  declarations: [EmbalajeListPage]
})
export class EmbalajeListPageModule {}
