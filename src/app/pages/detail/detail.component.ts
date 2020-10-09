import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {

  items: any[] = [
    { item_name: 'P/663553/DY/2020+10/2020' },
    { item_name: 'P/663553/DY/2020+10/2020' },
    { item_name: 'P/663553/DY/2020+10/2020' },
    { item_name: 'P/663553/DY/2020+10/2020' },
    { item_name: 'P/663553/DY/2020+10/2020' },
    { item_name: 'P/663553/DY/2020+10/2020' },
    { item_name: 'P/663553/DY/2020+10/2020' },
  ]

  constructor(private navctrl: NavController) { }

  ngOnInit() { }

  backbtn(): void {
    this.navctrl.navigateBack(['/home']);
  }

}
