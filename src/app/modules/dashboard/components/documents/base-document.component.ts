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

  getValue(path) {
    return get(this.formData, path, 'No Value');
  }

  getTodayDate() {
    return moment().format(DATE_FORMAT);
  }
}
