import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-display-modal',
  templateUrl: './display-modal.component.html',
  styleUrls: ['./display-modal.component.scss'],
})
export class DispalyModalComponent implements OnInit {

  constructor(private modalController: ModalController) { }

  @Input() data;

  ngOnInit() {
    console.log(this.data)
  }

  dismiss(value = ''): void {
    this.modalController.dismiss(value);
  }

}
