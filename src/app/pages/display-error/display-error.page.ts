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

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private navCtrl: NavController) {

    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.errorData = this.router.getCurrentNavigation().extras.state.data;
      } else {
        this.navCtrl.navigateBack(["/home"]);
      }
    });

  }

  ngOnInit() { }

  cancelAction(): void {
    this.navCtrl.navigateBack(['/home']);
  }

}
