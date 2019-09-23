import {Component, Input} from '@angular/core';
import * as moment from 'moment';
import {get} from 'lodash';
import {DATE_FORMAT} from '../../../shared/data/constants';


@Component({
  selector: 'app-base-document',
  template: ''
})
export class BaseDocumentComponent {
  @Input() formData: any;

  getValue(path, isDate = false) {
    const val = get(this.formData, path, 'No Value');

    if (isDate) {
      return moment(val).format(DATE_FORMAT);
    }

    return val;
  }

  getTodayDate() {
    return moment().format(DATE_FORMAT);
  }

  getPrintName() {
    const firstName = this.getValue('basicInformation.firstName');
    const lastName = this.getValue('basicInformation.lastName');
    const middleName = this.getValue('basicInformation.middleInitial');
    return `${firstName} ${middleName} ${lastName}`;
  }
}
