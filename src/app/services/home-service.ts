import { Injectable } from "@angular/core";
import { BaseService } from "./base-service";

@Injectable()
export class HomeService {

    pickUpObject: any = {
        "ver": "2020.08.15",
        "MSGTEXT1": "CHYBN\u00dd BAL\u00cdK",
        "ERROR": "OK", "ERRORMSG": "",
        "senderID": "COS0651~COS0651-",
        "senderName": "CZ0651,Roztylska 2321\/19,CZ-14800 Prague",
        "barcodedata":
            ["{\"packPosition\":\"P\\\/666884\\\/DY\\\/2020+10\\\/22\",\"packPositionID\":\"559719\",\"PickedUp-date\":\"20200908\",\"PickedUp-time\":\"11:00:52\",\"PickedUp-note\":\"\",\"PickedUp-user\":\"\",\"PickedUp-device\":\"UNDEFINED\",\"BARCODEOKMSG\":\"\",\"BARCODEERRORMSG\":\"\"}", "{\"packPosition\":\"P\\\/666884\\\/DY\\\/2020+11\\\/22\",\"packPositionID\":\"559720\",\"PickedUp-date\":\"20200908\",\"PickedUp-time\":\"11:01:08\",\"PickedUp-note\":\"\",\"PickedUp-user\":\"\",\"PickedUp-device\":\"UNDEFINED\",\"BARCODEOKMSG\":\"\",\"BARCODEERRORMSG\":\"\"}", "{\"packPosition\":\"P\\\/666884\\\/DY\\\/2020+1\\\/22\",\"packPositionID\":\"559710\",\"PickedUp-date\":\"\",\"PickedUp-time\":\"\",\"PickedUp-note\":\"\",\"PickedUp-user\":\"\",\"PickedUp-device\":\"UNDEFINED\",\"BARCODEOKMSG\":\"\",\"BARCODEERRORMSG\":\"\"}", "{\"packPosition\":\"P\\\/666884\\\/DY\\\/2020+12\\\/22\",\"packPositionID\":\"559721\",\"PickedUp-date\":\"\",\"PickedUp-time\":\"\",\"PickedUp-note\":\"\",\"PickedUp-user\":\"\",\"PickedUp-device\":\"UNDEFINED\",\"BARCODEOKMSG\":\"\",\"BARCODEERRORMSG\":\"\"}", "{\"packPosition\":\"P\\\/666884\\\/DY\\\/2020+13\\\/22\",\"packPositionID\":\"559722\",\"PickedUp-date\":\"\",\"PickedUp-time\":\"\",\"PickedUp-note\":\"\",\"PickedUp-user\":\"\",\"PickedUp-device\":\"UNDEFINED\",\"BARCODEOKMSG\":\"\",\"BARCODEERRORMSG\":\"\"}", "{\"packPosition\":\"P\\\/666884\\\/DY\\\/2020+14\\\/22\",\"packPositionID\":\"559723\",\"PickedUp-date\":\"\",\"PickedUp-time\":\"\",\"PickedUp-note\":\"\",\"PickedUp-user\":\"\",\"PickedUp-device\":\"UNDEFINED\",\"BARCODEOKMSG\":\"\",\"BARCODEERRORMSG\":\"\"}", "{\"packPosition\":\"P\\\/666884\\\/DY\\\/2020+15\\\/22\",\"packPositionID\":\"559724\",\"PickedUp-date\":\"\",\"PickedUp-time\":\"\",\"PickedUp-note\":\"\",\"PickedUp-user\":\"\",\"PickedUp-device\":\"UNDEFINED\",\"BARCODEOKMSG\":\"\",\"BARCODEERRORMSG\":\"\"}", "{\"packPosition\":\"P\\\/666884\\\/DY\\\/2020+16\\\/22\",\"packPositionID\":\"559725\",\"PickedUp-date\":\"\",\"PickedUp-time\":\"\",\"PickedUp-note\":\"\",\"PickedUp-user\":\"\",\"PickedUp-device\":\"UNDEFINED\",\"BARCODEOKMSG\":\"\",\"BARCODEERRORMSG\":\"\"}", "{\"packPosition\":\"P\\\/666884\\\/DY\\\/2020+17\\\/22\",\"packPositionID\":\"559726\",\"PickedUp-date\":\"\",\"PickedUp-time\":\"\",\"PickedUp-note\":\"\",\"PickedUp-user\":\"\",\"PickedUp-device\":\"UNDEFINED\",\"BARCODEOKMSG\":\"\",\"BARCODEERRORMSG\":\"\"}", "{\"packPosition\":\"P\\\/666884\\\/DY\\\/2020+18\\\/22\",\"packPositionID\":\"559727\",\"PickedUp-date\":\"\",\"PickedUp-time\":\"\",\"PickedUp-note\":\"\",\"PickedUp-user\":\"\",\"PickedUp-device\":\"UNDEFINED\",\"BARCODEOKMSG\":\"\",\"BARCODEERRORMSG\":\"\"}", "{\"packPosition\":\"P\\\/666884\\\/DY\\\/2020+19\\\/22\",\"packPositionID\":\"559728\",\"PickedUp-date\":\"\",\"PickedUp-time\":\"\",\"PickedUp-note\":\"\",\"PickedUp-user\":\"\",\"PickedUp-device\":\"UNDEFINED\",\"BARCODEOKMSG\":\"\",\"BARCODEERRORMSG\":\"\"}", "{\"packPosition\":\"P\\\/666884\\\/DY\\\/2020+20\\\/22\",\"packPositionID\":\"559729\",\"PickedUp-date\":\"\",\"PickedUp-time\":\"\",\"PickedUp-note\":\"\",\"PickedUp-user\":\"\",\"PickedUp-device\":\"UNDEFINED\",\"BARCODEOKMSG\":\"\",\"BARCODEERRORMSG\":\"\"}", "{\"packPosition\":\"P\\\/666884\\\/DY\\\/2020+21\\\/22\",\"packPositionID\":\"559730\",\"PickedUp-date\":\"\",\"PickedUp-time\":\"\",\"PickedUp-note\":\"\",\"PickedUp-user\":\"\",\"PickedUp-device\":\"UNDEFINED\",\"BARCODEOKMSG\":\"\",\"BARCODEERRORMSG\":\"\"}", "{\"packPosition\":\"P\\\/666884\\\/DY\\\/2020+2\\\/22\",\"packPositionID\":\"559711\",\"PickedUp-date\":\"\",\"PickedUp-time\":\"\",\"PickedUp-note\":\"\",\"PickedUp-user\":\"\",\"PickedUp-device\":\"UNDEFINED\",\"BARCODEOKMSG\":\"\",\"BARCODEERRORMSG\":\"\"}", "{\"packPosition\":\"P\\\/666884\\\/DY\\\/2020+22\\\/22\",\"packPositionID\":\"559731\",\"PickedUp-date\":\"\",\"PickedUp-time\":\"\",\"PickedUp-note\":\"\",\"PickedUp-user\":\"\",\"PickedUp-device\":\"UNDEFINED\",\"BARCODEOKMSG\":\"\",\"BARCODEERRORMSG\":\"\"}", "{\"packPosition\":\"P\\\/666884\\\/DY\\\/2020+3\\\/22\",\"packPositionID\":\"559712\",\"PickedUp-date\":\"\",\"PickedUp-time\":\"\",\"PickedUp-note\":\"\",\"PickedUp-user\":\"\",\"PickedUp-device\":\"UNDEFINED\",\"BARCODEOKMSG\":\"\",\"BARCODEERRORMSG\":\"\"}", "{\"packPosition\":\"P\\\/666884\\\/DY\\\/2020+4\\\/22\",\"packPositionID\":\"559713\",\"PickedUp-date\":\"\",\"PickedUp-time\":\"\",\"PickedUp-note\":\"\",\"PickedUp-user\":\"\",\"PickedUp-device\":\"UNDEFINED\",\"BARCODEOKMSG\":\"\",\"BARCODEERRORMSG\":\"\"}", "{\"packPosition\":\"P\\\/666884\\\/DY\\\/2020+5\\\/22\",\"packPositionID\":\"559714\",\"PickedUp-date\":\"\",\"PickedUp-time\":\"\",\"PickedUp-note\":\"\",\"PickedUp-user\":\"\",\"PickedUp-device\":\"UNDEFINED\",\"BARCODEOKMSG\":\"\",\"BARCODEERRORMSG\":\"\"}", "{\"packPosition\":\"P\\\/666884\\\/DY\\\/2020+6\\\/22\",\"packPositionID\":\"559715\",\"PickedUp-date\":\"\",\"PickedUp-time\":\"\",\"PickedUp-note\":\"\",\"PickedUp-user\":\"\",\"PickedUp-device\":\"UNDEFINED\",\"BARCODEOKMSG\":\"\",\"BARCODEERRORMSG\":\"\"}", "{\"packPosition\":\"P\\\/666884\\\/DY\\\/2020+7\\\/22\",\"packPositionID\":\"559716\",\"PickedUp-date\":\"\",\"PickedUp-time\":\"\",\"PickedUp-note\":\"\",\"PickedUp-user\":\"\",\"PickedUp-device\":\"UNDEFINED\",\"BARCODEOKMSG\":\"\",\"BARCODEERRORMSG\":\"\"}", "{\"packPosition\":\"P\\\/666884\\\/DY\\\/2020+9\\\/22\",\"packPositionID\":\"559718\",\"PickedUp-date\":\"\",\"PickedUp-time\":\"\",\"PickedUp-note\":\"\",\"PickedUp-user\":\"\",\"PickedUp-device\":\"UNDEFINED\",\"BARCODEOKMSG\":\"\",\"BARCODEERRORMSG\":\"\"}"]
    };

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
                console.log(i + " - " + arr[i]);
                let obj = JSON.parse(arr[i]);
                data.consignment.push(obj)
            }
        }
        return data;
    }

}
