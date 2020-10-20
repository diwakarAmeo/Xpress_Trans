import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { DispalyModalComponent } from './components/display-modal/display-modal.component';
import { CustomLoaderComponent } from './components/custom-loader/custom-loader.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,

  ],
  exports: [CustomLoaderComponent],
  declarations: [DispalyModalComponent,CustomLoaderComponent],
  entryComponents: [DispalyModalComponent]
})
export class SharedModule { }
