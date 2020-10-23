import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'detail', 
    loadChildren: () => import('./pages/detail/detail.module').then(m => m.DetailModule)
  },
  {
    path: 'manual',
    loadChildren: () => import('./pages/manual/manual.module').then(m => m.ManualModule)
  },
  {
    path: 'error',
    loadChildren: () => import('./pages/display-error/display-error.module').then(m => m.DisplayErrorPageModule)
  },
  {
    path: 'response',
    loadChildren: () => import('./pages/display-response/display-response.module').then(m => m.DisplayResponsePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
