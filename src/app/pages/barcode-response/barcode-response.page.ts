import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { BarcodeService } from 'src/app/services/barcode-service';
import { HelperService } from 'src/app/services/helper-service';
import { HomeService } from 'src/app/services/home-service';

import { ResponseModalComponent } from 'src/app/shared/components/response-modal/response-modal.component';

@Component({
  selector: 'app-barcode-response',
  templateUrl: './barcode-response.page.html',
  styleUrls: ['./barcode-response.page.scss'],
})
export class BarcodeResponsePage implements OnInit {
  pickUpObject: any;
  barcodeData: any[] = [];
  scannedCount: number = 0;

  constructor(
    private navctrl: NavController,
    private homeService: HomeService,
    private barcodeService: BarcodeService,
    private helperService: HelperService,
    private modalController: ModalController,
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
    this.pickUpObject['barcodedata'] = this.barcodeData;
    let item = JSON.parse(localStorage.getItem('item'));
    if (item) {
      let req = {
        phone: item.phone,
        code: item.code,
        response: JSON.stringify(this.pickUpObject)
      }
      this.postAllBarcode(req);
    }
  }

  postAllBarcode(data: any) {
    this.homeService.postAllBaecodeWithQr(data).then((res: any) => {
      this.openModal(res);
    }, (err: any) => {
      console.log(err);
    });
  }

  async openModal(res?: any) {
    const modal = await this.modalController.create({
      component: ResponseModalComponent,
      componentProps: { responsedata: res },
      cssClass: 'modal_content',
      showBackdrop: false,
      mode: 'ios'
    });

    await modal.present();

    modal.onWillDismiss().then((res) => {
      this.cancelAction();
    });
  }

  cancelAction(): void {
    this.navctrl.navigateBack(['/home']);
  }

}
