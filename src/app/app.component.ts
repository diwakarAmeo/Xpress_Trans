import { Component, HostListener } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HelperService } from './services/helper-service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  public checkNetwork: boolean = navigator.onLine;

  @HostListener("window:offline")
  OnlineEvent(event: Event) {
    alert(1);
    this.helperService.hideNetworkError();
  }

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public helperService: HelperService,
  ) {
    this.initializeApp();
    if (!this.checkNetwork) {
      this.helperService.showNewtworkError();
    }
    console.log(this.checkNetwork)

    addEventListener('window:online', (event) => {
      console.log('online', event);
      this.checkNetwork = false;
      this.helperService.showNewtworkError();
    });
    if (!this.checkNetwork) {
      addEventListener('offline', () => {
        this.helperService.hideNetworkError();
      })
    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

  }

}
