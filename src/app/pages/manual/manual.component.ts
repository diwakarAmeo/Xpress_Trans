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
    });
  }

  onSubmit(): void {
    alert(this.manualForm.value.code);
    this.homeService.requestCode(this.manualForm.value.code).then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err);
    })
  }

  cancelAction(): void {
    this.navctrl.navigateBack(['/home']);
  }

}
