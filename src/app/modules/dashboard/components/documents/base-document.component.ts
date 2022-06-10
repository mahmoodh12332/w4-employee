import {Component, Input, OnInit} from '@angular/core';
import * as moment from 'moment';
import {get, find} from 'lodash';
import {DATE_FORMAT, FORM_COOKIE_NAME} from '../../../shared/data/constants';
import {Countries} from '../../../shared/data/countries';
import {States} from '../../../shared/data/states';
import { CookieService } from 'src/app/modules/shared/services';
const DEFAULT_VALUE = '';
@Component({
  selector: 'app-base-document',
  template: ''
})
export class BaseDocumentComponent {
  @Input() formData: any;
  @Input() siteNamingConvention: any;

  constructor(private cookieService: CookieService) {
  }

  getValue(path, isDate = false) {
    if (path && path.includes('w4Information')) {
      this.formData = JSON.parse(this.cookieService.getCookie(FORM_COOKIE_NAME));
    }
    const val = get(this.formData, path);
    if (val && isDate) {
      return moment(val).format(DATE_FORMAT);
    }

    return val || DEFAULT_VALUE;
  }

  getTodayDate() {
    return moment().format(DATE_FORMAT);
  }
  getCurrentYear() {
    return moment().format('YYYY');
  }
  getSignaturePlaceholder() {
    return 'To be completed later';
  }
  getValueStateORCountryDetail(path, type) {
    const targetArray = {
      country: Countries,
      state: States
    };
    const value = this.getValue(path);
    return (find(targetArray[type], (k) => k.value === value) || {label: DEFAULT_VALUE}).label;
  }

  getPrintName() {
    const firstName = this.getValue('basicInformation.firstName');
    const lastName = this.getValue('basicInformation.lastName');
    const middleName = this.getValue('basicInformation.middleName');
    return `${firstName} ${middleName} ${lastName}`;
  }
  getAddress() {
    const {
      streetNo,
      address,
      zipCode,
      city
    } = this.getValue('address');
    const state = this.getValueStateORCountryDetail('address.state', 'state');
    return `${streetNo} ${address}, ${city}, ${state}, ${zipCode}`;
  }
}
