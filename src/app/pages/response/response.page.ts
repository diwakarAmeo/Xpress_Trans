import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { HelperService } from 'src/app/services/helper-service';

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
    phonenumber: '',
    latitude: null,
    longitude: null
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private navCtrl: NavController,
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
    this.data.phonenumber = this.req.phone;

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
    debugger;
  }

  cancelAction(): void {
    this.navCtrl.navigateBack(['/home']);
  }

}
