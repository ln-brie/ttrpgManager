import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewStepPage } from './new-step.page';

const routes: Routes = [
  {
    path: '',
    component: NewStepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewStepPageRoutingModule {}
