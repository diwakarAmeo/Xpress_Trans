import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { BarcodeService } from 'src/app/services/barcode-service';
import { HelperService } from 'src/app/services/helper-service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private navctrl: NavController,
    private helperService: HelperService,
    private barcodeService: BarcodeService
  ) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      phonenumber: ['', Validators.compose([Validators.required, Validators.maxLength(9)])],
    });
  }

  get phonenumber() {
    return this.registerForm.get('phonenumber');
  }

  scan() {
    this.barcodeService.scan('QR_CODE').then((res: any) => {
      debugger;
    }, (err: any) => {
      console.log(err);
      this.helperService.showAlert(err);
    })
  }

  scanPickup() {
    this.barcodeService.scan('QR_CODE').then((res: any) => {
      debugger;
    }, (err: any) => {
      console.log(err);
      this.helperService.showAlert(err);
    })
  }

  manualEntry() {
    this.navctrl.navigateForward(['/manual']);
  }
  
}  
