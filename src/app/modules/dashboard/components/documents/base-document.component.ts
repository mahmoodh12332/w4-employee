import {Component, Input} from '@angular/core';
import * as moment from 'moment';
import {get, find} from 'lodash';
import {DATE_FORMAT} from '../../../shared/data/constants';
import {Countries} from '../../../shared/data/countries';
import {States} from '../../../shared/data/states';

@Component({
  selector: 'app-base-document',
  template: ''
})
export class BaseDocumentComponent {
  @Input() formData: any;

  getValue(path, isDate = false) {
    const val = get(this.formData, path, '-');

    if (isDate) {
      return moment(val).format(DATE_FORMAT);
    }

    return val;
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
    return (find(targetArray[type], (k) => k.value === value) || {label: '-'}).label;
  }
  getPrintName() {
    const firstName = this.getValue('basicInformation.firstName');
    const lastName = this.getValue('basicInformation.lastName');
    const middleName = this.getValue('basicInformation.middleName');
    return `${firstName} ${middleName} ${lastName}`;
  }
}
