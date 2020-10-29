import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-error',
  templateUrl: './error.page.html',
  styleUrls: ['./error.page.scss'],
})
export class ErrorPage implements OnInit {


  data: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private navCtrl: NavController) {

    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.data;
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
