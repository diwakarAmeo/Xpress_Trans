import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Injectable({
    providedIn: 'root',
})
export class HelperService {

    loading: any;
    isLoading:boolean = false;

    constructor(
        private toastController: ToastController,
        private alertController: AlertController,
    ) {
    }

    async successMessage(message: any) {
        const toastElement = await this.toastController.create({
            message: message,
            duration: 2000,
            color: 'success',
            mode:'ios'
        });
        return await toastElement.present();
    }

    async errorMessage(message: any) {
        const toastElement = await this.toastController.create({
            message: message,
            duration: 3000,
            color: 'danger',
            mode:'ios'
        });
        return await toastElement.present();
    }

    async showAlert(message: any) {
        const alertCtrl = await this.alertController.create({
            message: message,
            buttons: ['Close']
        });
        return await alertCtrl.present();
    }

}
