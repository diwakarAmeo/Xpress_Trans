import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Injectable({
    providedIn: 'root',
})
export class HelperService {

    loading: any;
    isLoading:boolean = false;
    networkAlert: any;
    
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

    async showNewtworkError() {
        this.networkAlert = await this.alertController.create({
            cssClass: 'network',
            header: 'Network Error',
            message: 'Please check your Network Connection.',
            buttons: ['OK']
        });
        await this.networkAlert.present();
        this.networkAlert.onDidDismiss().then(data => {
            const network = navigator.onLine;
            if (!network) {
                this.showNewtworkError();
            }
        })
    }

    async hideNetworkError() {
        if (typeof this.networkAlert === 'object') {
            await this.networkAlert.dismiss();
            window.location.reload();
        }
    }

}
