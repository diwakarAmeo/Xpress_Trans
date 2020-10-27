import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { HelperService } from 'src/app/services/helper-service';
import { HomeService } from 'src/app/services/home-service';

@Component({
  selector: 'app-response',
  templateUrl: './response.page.html',
  styleUrls: ['./response.page.scss'],
})
export class ResponsePage implements OnInit {

  response: any;
  totalAmount = 0;
  totalDelivery: number = 0;
  defaultValues = [];
  req: any = {
    code: '',
    phone: ''
  }

  data = {
    notes: '',
    consignment: [],
    code: '',
    phone: '',
    latitude: null,
    longitude: null
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private navCtrl: NavController,
    private homeService: HomeService,
    private helperService: HelperService
  ) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.req = this.router.getCurrentNavigation().extras.state.req;
        this.response = this.router.getCurrentNavigation().extras.state.data;
        this.getRecords();
      }
      else {
        this.navCtrl.navigateBack(["/home"]);
      }
    });
  }

  ngOnInit() { }

  getRecords() {
    this.data.code = this.req.code;
    this.data.phone = this.req.phone;

    for (let item in this.response.consignment) {
      this.defaultValues[this.response.consignment[item].consPosition] = this.response.consignment[item]['consNumBC'];
      this.totalAmount += parseInt(this.response.consignment[item]['consNumBC']);
    }
    this.totalDelivery = this.totalAmount;
  }

  getTotal() {
    let total = 0;
    if (this.isValidate()) {
      for (let i in this.data.consignment) {
        total += parseInt(this.data.consignment[i]);
      }
      if (isNaN(total)) total = 0;

      this.totalAmount = total;
    }
  }

  isValidate() {
    for (let i in this.data.consignment) {
      console.log(parseInt(this.data.consignment[i]) + " - " + parseInt(this.defaultValues[i]));
      if (parseInt(this.data.consignment[i]) > parseInt(this.defaultValues[i])) {
        this.helperService.errorMessage(`Neplatné množství, ID: ${i}`);
        return false;
      }
    }
    return true;
  }

  confirmDelivery() {
    if (this.isValidate()) {
      let request = {};
      request = this.data;
      let consignments = [];
      for (let i in this.data['consignment']) {
        consignments.push({ 'key': i, 'value': this.data['consignment'][i] });
      }

      let formData = new FormData();
      formData.append('code', JSON.stringify(this.data.code));
      formData.append('consignment', JSON.stringify(consignments));
      formData.append('latitude', this.data.latitude);
      formData.append('longitude', this.data.longitude);
      formData.append('notes', this.data.notes);
      formData.append('phonenumber', this.data.phone);
      console.log(formData);

      debugger;

      // this.homeService.postRequestCode(this.req, request).then((res: any) => {
      //   debugger;
      // }, (err: any) => {
      //   console.log(err);
      //   this.helperService.errorMessage('Chyba, nepodařilo se odeslat data. Opakovat!!');
      // })
    }
  }

  cancelAction(): void {
    this.navCtrl.navigateBack(['/home']);
  }

}
