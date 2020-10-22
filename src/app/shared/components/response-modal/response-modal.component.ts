import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-response-modal',
  templateUrl: './response-modal.component.html',
  styleUrls: ['./response-modal.component.scss'],
})
export class ResponseModalComponent implements OnInit {

  constructor(private modalController: ModalController) { }

  @Input() responsedata;

  ngOnInit() {
    console.log(this.responsedata)
  }

  dismiss(value = ''): void {
    this.modalController.dismiss(value);
  }
}
