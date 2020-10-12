import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { HomeService } from 'src/app/services/home-service';
import { ErrorModalComponent } from 'src/app/shared/components/error-modal/error-modal.component';

@Component({
  selector: 'app-manual',
  templateUrl: './manual.component.html',
  styleUrls: ['./manual.component.scss'],
})
export class ManualComponent implements OnInit {
  manualForm: FormGroup;
  errorData: any = {};

  constructor(
    private homeService: HomeService,
    private navctrl: NavController,
    private modalController: ModalController,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.manualForm = this.fb.group({
      code: ['', [Validators.required]],
      phone: [345345839],
    });
  }

  onSubmit(): void {
    if(this.manualForm.valid){
    console.log(this.manualForm.value);
    this.homeService.requestCode(this.manualForm.value).then((res) => {
    const response = res;
    this.errorData = response;
      if (this.errorData.ERROR == 'ERROR') {
        this.openErrorMsg();
      }
    }).catch((err) => {
      console.log(err);
    })
  }
  }

 async openErrorMsg() {
      const modal = await this.modalController.create({
        component: ErrorModalComponent,
        componentProps: { data: this.errorData }
        });

        await modal.present();

        const data = await modal.onDidDismiss();
        console.log(data)
      }

  cancelAction(): void {
    this.navctrl.navigateBack(['/home']);
  }

}
