import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-display-response',
  templateUrl: './display-response.page.html',
  styleUrls: ['./display-response.page.scss'],
})
export class DisplayResponsePage implements OnInit {

  responseData: any;

  constructor(private route: ActivatedRoute, private router: Router, private navCtrl: NavController) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.responseData = this.router.getCurrentNavigation().extras.state.data;
        console.log(this.responseData);
        localStorage.setItem('responseData', JSON.stringify(this.responseData));
      }
      if (localStorage.getItem('responseData')) {
        this.responseData = JSON.parse(localStorage.getItem('responseData'));
      }
    });
  }

  ngOnInit() {
  }

  cancelAction(): void {
    this.navCtrl.navigateBack(['/home']);
  }

}
