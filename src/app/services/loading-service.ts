import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpInterceptor,
    HttpEvent
} from '@angular/common/http';
import { finalize, catchError } from 'rxjs/operators';
import { HelperService } from './helper-service';
import { Network } from '@ionic-native/network/ngx';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

    public totalRequests = 0;

    constructor(
        private helperService: HelperService,
        private network: Network) { }

    intercept(req: HttpRequest<any>, next: HttpHandler):
        import("rxjs").Observable<HttpEvent<any>> {
        this.totalRequests++;
        if (this.totalRequests === 1) {
            this.detect();
            this.helperService.isLoading = true;
            setTimeout(() => {
                this.helperService.isLoading = false;
                this.detect();
            }, 10000);
        }
        return <any>next.handle(req).pipe(
            catchError((err) => {
                throw err;
            }),

            finalize(() => {
                this.totalRequests--;
                if (this.totalRequests === 0) {
                    this.detect();
                    this.helperService.isLoading = false;
                } else {
                    this.detect();
                    this.helperService.isLoading = true;
                }
            })
        );
    }

    detect() {
        return this.network.onChange().subscribe(res => {
            console.log(res, 'net change');
        });
    }

}