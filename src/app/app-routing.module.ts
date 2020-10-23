import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'barcode-response', 
    loadChildren: () => import('./pages/barcode-response/barcode-response.module').then(m => m.BarcodeResponsePageModule)
  },
  {
    path: 'manual',
    loadChildren: () => import('./pages/manual/manual.module').then(m => m.ManualModule)
  },
  {
    path: 'error',
    loadChildren: () => import('./pages/error/error.module').then(m => m.ErrorPageModule)
  },
  {
    path: 'response',
    loadChildren: () => import('./pages/response/response.module').then(m => m.ResponsePageModule)
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
