import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { ManualComponent } from './manual.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BaseService } from 'src/app/services/base-service';
import { HomeService } from 'src/app/services/home-service';

const routes: Routes = [
  {
    path: '',
    component: ManualComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ManualComponent],
  // providers:[BaseService,HomeService]
})
export class ManualModule { }
