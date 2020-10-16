import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { HomeService } from 'src/app/services/home-service';
import { DispalyModalComponent } from 'src/app/shared/components/display-modal/display-modal.component';

@Component({
  selector: 'app-manual',
  templateUrl: './manual.component.html',
  styleUrls: ['./manual.component.scss'],
})
export class ManualComponent implements OnInit {
  manualForm: FormGroup;
  result: any = {};

  constructor(
    private homeService: HomeService,
    private navctrl: NavController,
    private modalController: ModalController,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.manualForm = this.fb.group({
      code: ['', [Validators.required]],
      phone: [''],
    });
    let item = JSON.parse(localStorage.getItem('item'));
    if (item) {
      this.manualForm.patchValue({ phone: item.phone });
    }
  }

  get code() {
    return this.manualForm.get('code');
  }


  onSubmit() {
    if (this.manualForm.valid) {
      console.log(this.manualForm.value);
      this.homeService.requestCode(this.manualForm.value).then((res: any) => {
        this.result = res;
        this.openErrorMsg();
      }).catch((err) => {
        console.log(err);
      })
    }
  }

  resetForm() {
    this.manualForm.reset();
  }

  async openErrorMsg() {
    const modal = await this.modalController.create({
      component: DispalyModalComponent,
      componentProps: { data: this.result },
      cssClass: 'modal_content',
      showBackdrop: false,
      mode: 'ios'
    });

    await modal.present();

    modal.onDidDismiss().then((res) => {
      this.cancelAction();
    });
  }

  cancelAction(): void {
    this.navctrl.navigateBack(['/home']);
  }

}
