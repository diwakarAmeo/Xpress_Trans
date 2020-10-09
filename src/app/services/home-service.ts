import { Injectable } from "@angular/core";
import { BaseService } from "./base-service";

@Injectable()
export class HomeService {

    constructor(
        private baseService: BaseService,
    ) { }

    getCatalogList() {
        const url = `catalog`;
        return this.baseService.get(url);
    }

    getCatalogById(id: any) {
        const url = `getdetails?id=${id}`;
        return this.baseService.get(url);
    }

}
