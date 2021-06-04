import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsPartiePageRoutingModule } from './details-partie-routing.module';

import { DetailsPartiePage } from './details-partie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsPartiePageRoutingModule
  ],
  declarations: [DetailsPartiePage]
})
export class DetailsPartiePageModule {}
