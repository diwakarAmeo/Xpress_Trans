import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ErrorModalComponent } from './components/error-modal/error-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,

  ],
  declarations: [ErrorModalComponent],
  entryComponents: [ErrorModalComponent]
})
export class SharedModule { }
