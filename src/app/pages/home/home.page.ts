import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController, NavController } from '@ionic/angular';

import { DispalyModalComponent } from 'src/app/shared/components/display-modal/display-modal.component';

import { HomeService } from 'src/app/services/home-service';
import { HelperService } from 'src/app/services/helper-service';
import { BarcodeService } from 'src/app/services/barcode-service';
import { ResponseModalComponent } from 'src/app/shared/components/response-modal/response-modal.component';
import { NavigationExtras, Router } from '@angular/router';

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
    private homeService: HomeService,
    private modalController: ModalController,
    private helperService: HelperService,
    private barcodeService: BarcodeService,
    private router: Router
  ) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      phonenumber: ['', Validators.compose([Validators.required, Validators.maxLength(9)])],
    });
    let item = JSON.parse(localStorage.getItem('item'));
    if (item) {
      this.registerForm.patchValue({ phonenumber: item.phone });
    }
  }

  get phonenumber() {
    return this.registerForm.get('phonenumber');
  }

  scan() {
    this.barcodeService.scan('QR_CODE').then((res: any) => {
      if (!res.cancelled) {
        if (res.text) {
          let req = {
            phone: this.phonenumber.value,
            code: res.text
          }
          localStorage.setItem('item', JSON.stringify(req));
          this.scanRequestCode(req);
        } else {
          this.helperService.showAlert('Please try again');
        }
      }
    }, (err: any) => {
      console.log(err);
      this.helperService.showAlert(err);
    })
  }

  scanRequestCode(data?: any) {
    this.homeService.requestCode(data).then((res: any) => {
      // this.openErrorMsg(res);
      if (res['ERROR'] == 'ERROR') {
      let navigationExtras: NavigationExtras = { state: { data: res } };
      this.router.navigate(['/error'], navigationExtras);
      }
    }, (err: any) => {
      if (typeof err == 'object') {
        this.helperService.errorMessage(JSON.stringify(err));
      } else {
        this.helperService.errorMessage(err);
      }
    })
  }

  scanPickup() {
    this.barcodeService.scan('QR_CODE').then((res: any) => {
      if (!res.cancelled) {
        if (res.text) {
          let req = {
            phone: this.phonenumber.value,
            code: res.text
          }
          localStorage.setItem('item', JSON.stringify(req));
          this.scanPickUpCode(req);
        } else {
          this.helperService.showAlert('Please try again');
        }
      }
    }, (err: any) => {
      console.log(err);
      this.helperService.showAlert(err);
    })
  }

  scanPickUpCode(data?: any) {
    let req = {
      phone: data.phone,
      code: data.code
    }
    this.homeService.postQrCode(req).then((res: any) => {
      if (res['ERROR'] == 'ERROR') {
        this.openErrorMsg(res);
        // this.helperService.errorMessage(res['ERRORMSG']);
      } else {
        this.homeService.pickUpObject = res;
        this.navctrl.navigateForward(['/detail']);
      }
    }, (err: any) => {
      this.helperService.errorMessage(err);
    })
  }

  manualEntry() {
    let req = {
      phone: this.phonenumber.value,
      code: ''
    }
    localStorage.setItem('item', JSON.stringify(req));
    this.navctrl.navigateForward(['/manual']);
  }

  async openErrorMsg(res?: any) {
    let component;
    if ((res.receiverID || res.receiverName)) {
      component = ResponseModalComponent;
    } else {
      component = DispalyModalComponent;
    }
    const modal = await this.modalController.create({
      component: component,
      componentProps: { responsedata: res },
      cssClass: 'modal_content',
      showBackdrop: false,
      mode: 'ios'
    });

    await modal.present();

    const data = await modal.onDidDismiss();
    console.log(data)
  }

}  
