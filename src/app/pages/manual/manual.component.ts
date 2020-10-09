import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-manual',
  templateUrl: './manual.component.html',
  styleUrls: ['./manual.component.scss'],
})
export class ManualComponent implements OnInit {

  constructor(private navctrl:NavController) { }

  ngOnInit() {}

  cancelAction():void {
  this.navctrl.navigateBack(['/home']);
  }

}
