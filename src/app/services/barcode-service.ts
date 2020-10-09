import { Injectable } from '@angular/core';
import { BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Injectable({
    providedIn: 'root',
})
export class BarcodeService {

    constructor(
        private barcodeScanner: BarcodeScanner
    ) {
    }

    scan(format = 'CODE_128') {
        let options: BarcodeScannerOptions = {
            prompt: "Place a Barcode inside the scan area",
            formats: format
        }
        return new Promise((resolve, reject) => {
            this.barcodeScanner.scan(options).then(barcodeData => {
                console.log('Barcode data', barcodeData);
                resolve(barcodeData);
            }).catch(err => {
                reject(err);
            });
        });
    }

}
