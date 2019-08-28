import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CookieService} from './cookie.service';

@Injectable()
export class AppService {
  constructor(private http: HttpClient, private cookieService: CookieService) {
  }

  loginUser({socialNumber, accessCode}): Promise<boolean> {
    return new Promise((resolve) => {
      // TODO: NEED TO INTEGRATE CALL HERE. JUST FOR TESTING
      this.cookieService.setCookie('currentSSN', socialNumber, 1);
      setTimeout(() => {
        resolve(true);
      }, 1000);
    });
  }
}
