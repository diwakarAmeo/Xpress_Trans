import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { ModalController, NavController } from '@ionic/angular';
import { BarcodeService } from 'src/app/services/barcode-service';
import { HelperService } from 'src/app/services/helper-service';
import { ErrorModalComponent } from 'src/app/shared/components/error-modal/error-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private navctrl: NavController,
    private helperService: HelperService,
    private barcodeService: BarcodeService,
    private modalctrl: ModalController
  ) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      phonenumber: ['', Validators.compose([Validators.required, Validators.maxLength(9)])],
    });
  }

  get phonenumber() {
    return this.registerForm.get('phonenumber');
  }

  async presentModal() {
    const modal = await this.modalctrl.create({
      component: ErrorModalComponent,
      componentProps: { value: 123 }
    });

    await modal.present();

    const data = await modal.onDidDismiss();
    console.log(data)

  }

  scan() {
    this.presentModal();
    this.barcodeService.scan('QR_CODE').then((res: any) => {
      debugger;
    }, (err: any) => {
      console.log(err);
      this.helperService.showAlert(err.message);
    })
  }

  scanPickup() {
    this.barcodeService.scan('QR_CODE').then((res: any) => {
      debugger;
    }, (err: any) => {
      console.log(err);
      this.helperService.showAlert(err.message);
    })
  }

  manualEntry() {
    this.navctrl.navigateForward(['/manual']);
  }
}  
