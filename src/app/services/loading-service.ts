import { Injectable, NgZone } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpInterceptor,
    HttpEvent
} from '@angular/common/http';
import { finalize, catchError } from 'rxjs/operators';
import { HelperService } from './helper-service';
import { NetworkStatus, PluginListenerHandle, Plugins } from '@capacitor/core';
import { Observable, BehaviorSubject } from 'rxjs';
const { Network } = Plugins;
@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
    networkStatus: NetworkStatus;
    networkListener: PluginListenerHandle;
    isOnline$: Observable<boolean>;
    private statusSubject = new BehaviorSubject<boolean>(false);
    public totalRequests = 0;

    constructor(
        private helperService: HelperService,
        private zone: NgZone) { }

    intercept(req: HttpRequest<any>, next: HttpHandler):
        import("rxjs").Observable<HttpEvent<any>> {
        this.totalRequests++;
        if (this.totalRequests === 1) {
            this.networkHandler();
            this.helperService.isLoading = true;
        } else {
            this.networkHandler();
            this.helperService.isLoading = false;
        }
        return <any>next.handle(req).pipe(
            catchError((err) => {
                throw err;
            }),

            finalize(() => {
                this.totalRequests--;
                if (this.totalRequests === 0) {
                    // this.networkHandler();
                    this.helperService.isLoading = false;
                } else {
                    this.helperService.isLoading = true;
                }
            })
        )
    }

    async networkHandler() {
        
        this.networkListener = Network.addListener('networkStatusChange', (status) => {
            this.zone.run(() => {
                console.log("Network status changed", status);
                this.networkStatus = status;
            });
        });

        this.networkStatus = await Network.getStatus();
        console.log(this.networkStatus);
    }
    

}