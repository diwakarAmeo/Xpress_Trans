import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { HomeService } from 'src/app/services/home-service';

@Component({
  selector: 'app-manual',
  templateUrl: './manual.component.html',
  styleUrls: ['./manual.component.scss'],
})
export class ManualComponent implements OnInit {
  manualForm: FormGroup;

  constructor(
    private homeService: HomeService,
    private navctrl: NavController,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.manualForm = this.fb.group({
      code: ['', [Validators.required]],
      phone: [345345839, [Validators.required]],
    });
  }

  onSubmit(): void {
    console.log(this.manualForm.value);
    this.homeService.requestCode(this.manualForm.value).then((res) => {
     console.log(res);
    }).catch((err) => {
      console.log(err);
    })
  }

  cancelAction(): void {
    this.navctrl.navigateBack(['/home']);
  }

}
