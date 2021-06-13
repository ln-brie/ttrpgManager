import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewPersoPage } from './new-perso.page';

const routes: Routes = [
  {
    path: '',
    component: NewPersoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewPersoPageRoutingModule {}
