import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { FormValidationService } from 'src/app/services/form-validation.service';


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
    private customValidator: FormValidationService
  ) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      phonenumber: ['', Validators.compose([Validators.required, this.customValidator.patternValidator()])],
    });
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

  manualEntry(){
    this.navctrl.navigateForward(['/item-list']);
  }
}  
