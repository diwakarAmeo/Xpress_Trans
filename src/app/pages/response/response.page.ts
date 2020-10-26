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

  constructor(private route: ActivatedRoute, private router: Router, private navCtrl: NavController) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
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
