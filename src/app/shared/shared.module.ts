import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ErrorModalComponent } from './components/error-modal/error-modal.component';
import { CustomLoaderComponent } from './components/custom-loader/custom-loader.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,

  ],
  exports: [CustomLoaderComponent],
  declarations: [ErrorModalComponent,CustomLoaderComponent],
  entryComponents: [ErrorModalComponent]
})
export class SharedModule { }
