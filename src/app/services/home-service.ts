import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';
import { BaseService } from "./base-service";

@Injectable()
export class HomeService {

    baseApiUrl = environment.baseApiUrl;
    pickUpObject: any = {};

    constructor(
        private baseService: BaseService,
    ) { }

    requestCode(data: any) {
        const url = `XPT-MobDistribuce.php?M=${data.phone}|${data.code}`;
        return this.baseService.get(url).then((res: any) => {
            if (res['ERROR'] == 'OK') {
                let response = this.stringToJson(res);
                return response;
            } else {
                return res;
            }
        });
    }

    postQrCode(data: any) {
        const url = `XPT-MobDistribuceSVOZ.php?M=${data.phone}|${data.code}`;
        return this.baseService.get(url);
    }

    postAllBaecodeWithQr(data: any) {
        const url = `XPT-MobDistribuceSVOZ.php?M=${data.phone}|${data.code}`;
        return this.baseService.post(url, data);
    }

    stringToJson(arr) {
        let data = { 'receiverID': '', 'receiverName': '', 'ERROR': '', 'consignment': [], 'total': 0 };
        data.receiverID = arr.receiverID;
        data.receiverName = arr.receiverName;
        data.ERROR = arr.ERROR;
        for (let i in arr) {
            if (i !== 'receiverID' && i !== 'receiverName' && i !== 'ERROR' && i !== 'ver' && i !== 'ERRORMSG') {
                let obj = JSON.parse(arr[i]);
                data.consignment.push(obj)
            }
        }
        return data;
    }

    postRequestCode(data, formData) {
        let self = this;
        let promise = new Promise((resolve, reject) => {
            self.xhr(`${this.baseApiUrl}XPT-MobDistribuce.php?M=${data.phone}|${data.code}`, formData, function (obj) {
                obj = JSON.parse(obj);
                console.log("From server", obj);
                resolve(obj);
            });
        });
        return promise;
    }

    xhr(url, data, callback) {
        let request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (request.readyState == 4 && request.status == 200) {
                callback(request.responseText);
            }
        };
        request.open('POST', url, true);
        request.send(data);
    }

}
