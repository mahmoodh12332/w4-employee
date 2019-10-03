import * as CryptoJS from 'crypto-js';
import {COOKIE_ENCRPT_SECRET} from '../data/constants';

class Base64 {
  private keyStr = COOKIE_ENCRPT_SECRET;

  encode(data) {
    return CryptoJS.AES.encrypt(data, this.keyStr).toString();
  }
  decode(data) {
    return CryptoJS.AES.decrypt(data, this.keyStr).toString(CryptoJS.enc.Utf8);
  }
}

export const Encryptor = new Base64();
