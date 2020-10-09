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
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private navctrl: NavController,
    private helperService: HelperService,
    private barcodeService: BarcodeService
  ) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      phonenumber: ['', Validators.compose([Validators.required, this.patternValidator()])],
    });
  }

  patternValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        return null;
      }
      const regex = new RegExp(/^.{9,}$/);
      const valid = regex.test(control.value);
      return  valid ? null : { invalidPassword: true };
    };
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }

  validate() {
    this.submitted = true;
    if (this.registerForm.valid) {
      console.table(this.registerForm.value);
    }
  }

  scan() {
    this.barcodeService.scan('QR_CODE').then((res: any) => {
      debugger;
    }, (err: any) => {
      console.log(err);
      this.helperService.showAlert(err.message);
    })
  }

  manualEntry(){
    this.navctrl.navigateForward(['/manual']);
  }

  scanPickup() {
    this.barcodeService.scan('QR_CODE').then((res: any) => {
      debugger;
    }, (err: any) => {
      console.log(err);
      this.helperService.showAlert(err.message);
    })
  }
}  
