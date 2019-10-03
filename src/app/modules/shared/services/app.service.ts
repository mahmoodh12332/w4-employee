import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {
  API_ROUTES,
  CURRENT_SSN_COOKIE_NAME,
  FORM_COOKIE_NAME,
  SITE_INFO_COOKIE_NAME,
} from '../data/constants';
import {CookieService} from './cookie.service';
import {MatSnackBar} from '@angular/material';

@Injectable()
export class AppService {
  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private snackBar: MatSnackBar
  ) {
  }

  loginUser({socialNumber, accessCode}): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.http.get(`${API_ROUTES.getAccessCode}/${accessCode}`).subscribe((res: any) => {
        if (res.status === 'success') {
          this.cookieService.setCookie(CURRENT_SSN_COOKIE_NAME, socialNumber, 1);
          this.cookieService.setCookie(SITE_INFO_COOKIE_NAME, JSON.stringify(res.data), 1);
          resolve(res.data);
          return;
        }
        res.errors.forEach((e: any) => {
          this.snackBar.open(e.message, 'OK', {
            verticalPosition: 'top',
            horizontalPosition: 'right',
            duration: 2000,
          });
        });
        reject(res.errors);
      });
    });
  }

  logoutUser() {
    this.cookieService.removeCookie(CURRENT_SSN_COOKIE_NAME);
    this.cookieService.removeCookie(FORM_COOKIE_NAME);
    this.cookieService.removeCookie(SITE_INFO_COOKIE_NAME);
  }
}
