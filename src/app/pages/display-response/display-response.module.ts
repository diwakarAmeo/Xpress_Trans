import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisplayResponsePageRoutingModule } from './display-response-routing.module';

import { DisplayResponsePage } from './display-response.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisplayResponsePageRoutingModule
  ],
  declarations: [DisplayResponsePage]
})
export class DisplayResponsePageModule {}
