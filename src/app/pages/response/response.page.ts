import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-response',
  templateUrl: './response.page.html',
  styleUrls: ['./response.page.scss'],
})
export class ResponsePage implements OnInit {

  responseData: any;
  sortedData: any[] = [];
  consValues: any[] = [];
  amount: any;
  totalDelivery: any;
  defaultProps: any;


  constructor(private route: ActivatedRoute, private router: Router, private navCtrl: NavController) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.responseData = this.router.getCurrentNavigation().extras.state.data;
        for (let i in this.responseData.consignment) {
          console.log(this.responseData);
          this.consValues.push(this.responseData.consignment[i]);
          this.defaultProps = this.responseData.consignment[i].consPosition;
        }
      }
      else {
        this.navCtrl.navigateBack(["/home"]);
      }
    });
  }

  ngOnInit() {}

  getTotal() {
    let total = 0;
    if (!this.validateInput()) {}
    for (let i in this.consValues) {
      // console.log(e.target.value+" - ");
      // console.log(this.consValues[this.consValues.consignment[i].consPosition]['consNumBC']+" - "+this.consValues.consignment[this.consValues.consignment[i].consPosition]['defaultConsNumBC']);
      // console.log(this.consValues);
      // total += parseInt(this.consValues.consignment[i]);
    }

    if (isNaN(total)) total = 0;

    // this.newTotal = total;
  }

  validateInput() {
    let invalid = false;
    console.log(this.consValues);
    for (let i in this.consValues) {
      console.log(parseInt(this.consValues[i]) + " - " + parseInt(this.defaultProps[i]));

      if (parseInt(this.consValues[i]) > parseInt(this.defaultProps[i])) {
        invalid = true;
      }
    }

    return invalid;

  }


  cancelAction(): void {
    this.navCtrl.navigateBack(['/home']);
  }

}
