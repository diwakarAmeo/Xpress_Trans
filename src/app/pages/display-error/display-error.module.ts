import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisplayErrorPageRoutingModule } from './display-error-routing.module';

import { DisplayErrorPage } from './display-error.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisplayErrorPageRoutingModule
  ],
  declarations: [DisplayErrorPage]
})
export class DisplayErrorPageModule {}
