import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditPartiePage } from './edit-partie.page';

const routes: Routes = [
  {
    path: '',
    component: EditPartiePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditPartiePageRoutingModule {}
