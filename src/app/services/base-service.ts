import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class BaseService {
    baseApiUrl: any;

    constructor(public http: HttpClient) {
        this.baseApiUrl = environment.baseApiUrl;
    }

    private setHeader() {
        let headerJson = {
            'Content-Type': 'application/json',
        }
        const headers = new HttpHeaders(headerJson);
        return headers;
    }

    post(url, body: any) {
        url = this.baseApiUrl + url;
        let headers = this.setHeader();
        return this.http.post(url, body, { headers: headers }).toPromise();
    }

    put(url, body: any) {
        url = this.baseApiUrl + url;
        let headers = this.setHeader();
        return this.http.put(url, body, { headers: headers }).toPromise();
    }

    get(url) {
        url = this.baseApiUrl + url;
        let headers = this.setHeader();
        return this.http.get(url, { headers: headers }).toPromise();
    }

    getWithParams(url, params) {
        url = this.baseApiUrl + url;
        let headers = this.setHeader();
        return this.http.get(url, { headers: headers, params: params }).toPromise();
    }

    delete(url: string) {
        url = this.baseApiUrl + url;
        let headers = this.setHeader();
        return this.http.delete(url, { headers: headers }).toPromise();
    }
}