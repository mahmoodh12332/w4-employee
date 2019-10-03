import { Injectable } from '@angular/core';
import { API_KEY, API_KEY_HEADER } from '../data/constants';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      headers: req.headers.set(API_KEY_HEADER, API_KEY),
    });
    return next.handle(req);
  }
}
