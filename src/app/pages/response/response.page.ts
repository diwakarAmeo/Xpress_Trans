import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-response',
  templateUrl: './response.page.html',
  styleUrls: ['./response.page.scss'],
})
export class ResponsePage implements OnInit {

  responseData: any[] = [];
  sortedData: any[] = [];
  defaultValues: any[] = [];
  constructor(private route: ActivatedRoute, private router: Router, private navCtrl: NavController) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.responseData.push(this.router.getCurrentNavigation().extras.state.data);
        console.log(this.responseData, this.responseData.length);
        for (let index = 0; index < this.responseData.length; index++) {
          
          let indexStr = index.toString();
          this.sortedData = JSON.parse(this.responseData[index][indexStr]);
          console.log(this.sortedData);
         }
        
      } 
      else {
        this.navCtrl.navigateBack(["/home"]);
      }
    });
  }

  ngOnInit() {
  }

  cancelAction(): void {
    this.navCtrl.navigateBack(['/home']);
  }
  
}
