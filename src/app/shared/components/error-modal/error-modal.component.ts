import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-error-modal',
  templateUrl: './error-modal.component.html',
  styleUrls: ['./error-modal.component.scss'],
})
export class ErrorModalComponent implements OnInit {

  constructor(private modalController: ModalController) { }

  @Input() data;

  ngOnInit() {
    console.log(this.data)
  }

  dismiss(value = ''): void {
    this.modalController.dismiss(value);
  }


}
