import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewStepPageRoutingModule } from './new-step-routing.module';

import { NewStepPage } from './new-step.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewStepPageRoutingModule
  ],
  declarations: [NewStepPage]
})
export class NewStepPageModule {}
