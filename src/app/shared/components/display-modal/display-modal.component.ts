import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-display-modal',
  templateUrl: './display-modal.component.html',
  styleUrls: ['./display-modal.component.scss'],
})
export class DispalyModalComponent implements OnInit {

  constructor(private modalController: ModalController, private navCtrl: NavController) { }

  @Input() data;

  ngOnInit() {}
  
  dismiss(value = ''): void {
    this.modalController.dismiss(value);
  }

}
