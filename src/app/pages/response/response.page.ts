import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';

import { HelperService } from 'src/app/services/helper-service';
import { HomeService } from 'src/app/services/home-service';

@Component({
  selector: 'app-response',
  templateUrl: './response.page.html',
  styleUrls: ['./response.page.scss'],
})
export class ResponsePage implements OnInit {

  response: any;
  consignmentList: any[] = [];

  req: any = {
    code: '',
    phone: ''
  }

  data = {
    notes: '',
    consignment: [],
    latitude: null,
    longitude: null
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private navCtrl: NavController,
    private geolocation: Geolocation,
    private homeService: HomeService,
    private helperService: HelperService
  ) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.req = this.router.getCurrentNavigation().extras.state.req;
        this.response = this.router.getCurrentNavigation().extras.state.data;
        this.getRecords();
        this.getLocation();
      }
      else {
        this.navCtrl.navigateBack(["/home"]);
      }
    });
  }

  ngOnInit() { }

  getRecords() {
    for (let item in this.response.consignment) {
      let record = this.response.consignment[item];
      this.consignmentList.push({
        id: record.consPosition,
        amount: record.consNumBC,
        actualAmount: record.consNumBC,
        isValid: true
      })
    }
  }

  getLocation() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.data.latitude = resp.coords.latitude;
      this.data.longitude = resp.coords.longitude;
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  getTotal() {
    return this.consignmentList.map(x => {
      return x.amount || 0;
    }).reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    });
  }

  validateRecord(index) {
    let item = this.consignmentList[index];
    if (item.amount > item.actualAmount) {
      item.isValid = false;
      this.helperService.errorMessage(`Neplatné množství, ID: ${item.id}`);
    } else {
      item.isValid = true;
    }
  }

  isValidate() {
    let records = this.consignmentList.filter(x => !x.isValid);
    if (records.length > 0) {
      this.helperService.errorMessage(`Neplatné množství, ID: ${this.consignmentList[0].id}`);
      return false;
    } else {
      return true;
    }
  }

  confirmDelivery() {
    if (this.isValidate()) {

      let consignments = [];
      for (let item of this.consignmentList) {
        consignments.push({ 'key': item.id, 'value': item.amount });
      }

      let formData = new FormData();
      formData.append('code', JSON.stringify(this.req.code));
      formData.append('consignment', JSON.stringify(consignments));
      formData.append('latitude', this.data.latitude);
      formData.append('longitude', this.data.longitude);
      formData.append('notes', this.data.notes);
      formData.append('phonenumber', this.req.phone);;

      this.homeService.postRequestCode(this.req, formData).then((res: any) => {
        debugger;
      }, (err: any) => {
        console.log(err);
        this.helperService.errorMessage('Chyba, nepodařilo se odeslat data. Opakovat!!');
      })
    }
  }

  cancelAction(): void {
    this.navCtrl.navigateBack(['/home']);
  }

}
