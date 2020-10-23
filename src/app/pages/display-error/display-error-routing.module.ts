import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisplayErrorPage } from './display-error.page';

const routes: Routes = [
  {
    path: '',
    component: DisplayErrorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisplayErrorPageRoutingModule {}
