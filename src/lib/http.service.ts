import { Injectable } from '@angular/core';
import { HttpBackend, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NGXLogInterface } from './types/ngx-log.interface';



@Injectable()
export class NGXLoggerHttpService {
  constructor(private readonly httpBackend: HttpBackend) { }

  logOnServer(url: string, log: NGXLogInterface, options: object): Observable<any> {
    // HttpBackend skips all HttpInterceptors 
    // They may log errors using this service causing circular calls
    const req = new HttpRequest<any>("POST", url, log, options || {});
    return this.httpBackend.handle(req);
  }

}
