import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'parties',
    loadChildren: () => import('./parties/parties.module').then( m => m.PartiesPageModule)
  },
  {
    path: 'new-partie',
    loadChildren: () => import('./new-partie/new-partie.module').then( m => m.NewPartiePageModule)
  },
  {
    path: 'details-partie',
    loadChildren: () => import('./details-partie/details-partie.module').then( m => m.DetailsPartiePageModule)
  },
  {
    path: 'edit-partie',
    loadChildren: () => import('./edit-partie/edit-partie.module').then( m => m.EditPartiePageModule)
  },
  {
    path: 'new-perso',
    loadChildren: () => import('./new-perso/new-perso.module').then( m => m.NewPersoPageModule)
  },
  {
    path: 'details-perso',
    loadChildren: () => import('./details-perso/details-perso.module').then( m => m.DetailsPersoPageModule)
  },
  {
    path: 'new-step',
    loadChildren: () => import('./new-step/new-step.module').then( m => m.NewStepPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
