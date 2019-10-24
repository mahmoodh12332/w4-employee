import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {Observable} from 'rxjs';
import {CookieService} from '../cookie.service';
import {CURRENT_SSN_COOKIE_NAME, SITE_INFO_COOKIE_NAME} from '../../data/constants';


@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private router: Router,
    private cookieService: CookieService,
  ) {
  }

  canActivate(): boolean | Observable<boolean> {
    if (!this.cookieService.getCookie(CURRENT_SSN_COOKIE_NAME) || !this.cookieService.getCookie(SITE_INFO_COOKIE_NAME)) {
      this.router.navigate(['/authentication']);
      return false;
    }
    return true;
  }
}
