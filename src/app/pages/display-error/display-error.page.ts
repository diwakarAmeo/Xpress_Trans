import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-display-error',
  templateUrl: './display-error.page.html',
  styleUrls: ['./display-error.page.scss'],
})
export class DisplayErrorPage implements OnInit {

  errorData: any;

  constructor(private route: ActivatedRoute, private router: Router, private navCtrl: NavController) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.errorData = this.router.getCurrentNavigation().extras.state.data;
        console.log(this.errorData);
        localStorage.setItem('errordata', JSON.stringify(this.errorData));
      }
      if (localStorage.getItem('errordata')) {
        this.errorData = JSON.parse(localStorage.getItem('errordata'));
      }
    });
  }

  ngOnInit() {
   
  }

  cancelAction() :void {
    this.navCtrl.navigateBack(['/home']);
  }

}
