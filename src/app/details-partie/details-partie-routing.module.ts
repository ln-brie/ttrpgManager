import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsPartiePage } from './details-partie.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsPartiePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsPartiePageRoutingModule {}
