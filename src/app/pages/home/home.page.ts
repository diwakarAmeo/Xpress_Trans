import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';

import { HomeService } from 'src/app/services/home-service';
import { HelperService } from 'src/app/services/helper-service';
import { BarcodeService } from 'src/app/services/barcode-service';

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
      let navigationExtras: NavigationExtras = { state: { data: res, req: data } };
      if (res['ERROR'] == 'ERROR') {
        this.router.navigate(['/error'], navigationExtras);
      } else {
        this.router.navigate(['/response'], navigationExtras);
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
      let navigationExtras: NavigationExtras = { state: { data: res, req: data } };
      if (res['ERROR'] == 'ERROR') {
        this.router.navigate(['/error'], navigationExtras);
      } else {
        this.homeService.pickUpObject = res;
        this.navctrl.navigateForward(['/barcode-response']);
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

}  
