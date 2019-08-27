import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {Observable} from 'rxjs';
import {CookieService} from '../cookie.service';


@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private router: Router,
    private cookieService: CookieService,
  ) {
  }

  canActivate(): boolean | Observable<boolean> {
    if (!this.cookieService.getCookie('currentSSN')) {
      this.router.navigate(['/authentication']);
      return false;
    }
    return true;
  }
}
