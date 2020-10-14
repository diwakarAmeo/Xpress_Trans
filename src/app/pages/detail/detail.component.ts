import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BarcodeService } from 'src/app/services/barcode-service';
import { HelperService } from 'src/app/services/helper-service';

import { HomeService } from 'src/app/services/home-service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {

  pickUpObject: any;
  barcodeData: any[] = [];
  scannedCount: number = 0;

  constructor(
    private navctrl: NavController,
    private homeService: HomeService,
    private barcodeService: BarcodeService,
    private helperService: HelperService
  ) {
    this.pickUpObject = this.homeService.pickUpObject;
    this.extractBarcode()
  }

  ngOnInit() { }


  extractBarcode() {
    this.pickUpObject['barcodedata'].forEach((x) => {
      let data = JSON.parse(x)
      this.barcodeData.push({ ...data, checked: false });
    });
    console.log(this.barcodeData);
  }

  scanBarcode() {
    this.barcodeService.scan('CODE_128').then((res: any) => {
      if (!res.cancelled) {
        if (res.text) {
          this.updateBarcodes(res.text);
        } else {
          this.helperService.showAlert('Please try again');
        }
      }
    }, (err: any) => {
      console.log(err);
      this.helperService.showAlert(err);
    })
  }

  updateBarcodes(item) {
    this.barcodeData.filter(x => {
      x.packPosition == item ? x.checked = true : x
    });
    this.scannedCount = this.barcodeData.filter(x => x.checked).length;
  }

  submit() {

  }

  cancelAction(): void {
    this.navctrl.navigateBack(['/home']);
  }

}
