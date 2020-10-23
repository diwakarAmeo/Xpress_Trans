import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisplayResponsePage } from './display-response.page';

const routes: Routes = [
  {
    path: '',
    component: DisplayResponsePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisplayResponsePageRoutingModule {}
