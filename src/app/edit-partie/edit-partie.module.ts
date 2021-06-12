import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditPartiePageRoutingModule } from './edit-partie-routing.module';

import { EditPartiePage } from './edit-partie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditPartiePageRoutingModule
  ],
  declarations: [EditPartiePage]
})
export class EditPartiePageModule {}
