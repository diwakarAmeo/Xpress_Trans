import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { HomeService } from 'src/app/services/home-service';

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
    private router: Router,
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
      this.homeService.requestCode(this.manualForm.value).then((res: any) => {
        let navigationExtras: NavigationExtras = { state: { data: res, req: this.manualForm.value } };
        if (res['ERROR'] == 'ERROR') {
          this.router.navigate(['/error'], navigationExtras);
        } else {
          this.router.navigate(['/response'], navigationExtras);
        }
      }).catch((err) => {
        console.log(err);
      });
    }
  }

  resetForm() {
    this.manualForm.reset();
  }

  cancelAction(): void {
    this.navctrl.navigateBack(['/home']);
  }

}
