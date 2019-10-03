import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Encryptor} from '../classes/base64';

@Injectable()
export class CookieService {
  constructor(private http: HttpClient) {
  }

  setCookie(cname: any, cvalue: any, exdays: any): void {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    const expires = 'expires=' + d.toUTCString();
    document.cookie = cname + '=' + Encryptor.encode(cvalue) + ';' + expires + ';path=/';
  }

  getCookie(cname: any): string {
    const name = cname + '=';
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      console.log(c);
      if (c.indexOf(name) === 0) {
        return Encryptor.decode(c.substring(name.length, c.length));
      }
    }
    return '';
  }

  removeCookie(cookieName) {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }
}
