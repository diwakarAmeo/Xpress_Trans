import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { DispalyModalComponent } from './components/display-modal/display-modal.component';
import { CustomLoaderComponent } from './components/custom-loader/custom-loader.component';
import { ResponseModalComponent } from './components/response-modal/response-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,

  ],
  exports: [CustomLoaderComponent],
  declarations: [DispalyModalComponent,CustomLoaderComponent,ResponseModalComponent],
  entryComponents: [DispalyModalComponent, ResponseModalComponent]
})
export class SharedModule { }
