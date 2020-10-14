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

  updateBarcodes(data) {
    this.barcodeData.filter(item => {
      if (item.packPosition == data) {
        let date = new Date().getTime();
        item.checked = true;
        item['PickedUp-date'] = date;
        item['PickedUp-time'] = date;
      } else {
        return item;
      }
    });
    this.scannedCount = this.barcodeData.filter(x => x.checked).length;
  }

  submit() {
    this.barcodeData.forEach((item) => { delete item.checked });
    let item = JSON.parse(localStorage.getItem('item'));
    if (item) {
      let req = {
        phone: item.phone,
        code: item.code,
        response: JSON.stringify(this.barcodeData)
      }
      this.postAllBarcode(req);
    }
  }

  postAllBarcode(data: any) {
    this.homeService.postAllBaecodeWithQr(data).then((res: any) => {
      debugger;
    }, (err: any) => {
      debugger;
    });
  }

  cancelAction(): void {
    this.navctrl.navigateBack(['/home']);
  }

}
