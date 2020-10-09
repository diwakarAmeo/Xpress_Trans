import { Injectable } from "@angular/core";
import { BaseService } from "./base-service";

@Injectable()
export class HomeService {

    constructor(
        private baseService: BaseService,
    ) { }

    requestCode(data: any) {
        const url = `XPT-MobDistribuce.php?M=${data.phone}|${data.code}`;
        return this.baseService.get(url);
    }

    postQrCode(data: any) {
        const url = `XPT-MobDistribuceSVOZ.php?M=${data.phonenumber}|${data.code}`;
        return this.baseService.get(url);
    }

}
