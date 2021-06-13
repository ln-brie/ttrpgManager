import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewPersoPageRoutingModule } from './new-perso-routing.module';

import { NewPersoPage } from './new-perso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewPersoPageRoutingModule
  ],
  declarations: [NewPersoPage]
})
export class NewPersoPageModule {}
