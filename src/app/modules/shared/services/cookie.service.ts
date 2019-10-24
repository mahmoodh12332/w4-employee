import {Injectable} from '@angular/core';
import {Encryptor} from '../classes/base64';

@Injectable()
export class CookieService {
  constructor() {}

  setCookie(cname: any, cvalue: any, exdays?): void {
    sessionStorage.setItem(cname, Encryptor.encode(cvalue));
  }

  getCookie(cname: any): string {
    const value = sessionStorage.getItem(cname);
    if (!value) {
      return '';
    }
    return Encryptor.decode(value);
  }

  removeCookie(cookieName) {
    sessionStorage.removeItem(cookieName);
  }
}
