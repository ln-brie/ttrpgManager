import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewPartiePageRoutingModule } from './new-partie-routing.module';

import { NewPartiePage } from './new-partie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewPartiePageRoutingModule
  ],
  declarations: [NewPartiePage]
})
export class NewPartiePageModule {}
