import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HomeService } from 'src/app/services/home-service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {

  pickUpObject: any;
  barcodeData:any[] =[];
  listItem: any[] = [];
  constructor(
    private navctrl: NavController,
    private homeService: HomeService
  ) { 
    this.pickUpObject = this.homeService.pickUpObject;
    this.barcodeData = this.pickUpObject['barcodedata'];
    this.extractBarcode()
  }

  ngOnInit() { }


  extractBarcode() {
    this.barcodeData.forEach((x) => {
       this.listItem.push(JSON.parse(x));
    });
    return this.listItem;
  }


  backbtn(): void {
    this.navctrl.navigateBack(['/home']);
  }

}
