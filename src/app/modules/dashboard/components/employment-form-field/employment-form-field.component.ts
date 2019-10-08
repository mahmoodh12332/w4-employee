import {Component, EventEmitter, Input, Output, ViewChild, OnChanges, SimpleChanges} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {find, startCase} from 'lodash';
import * as moment from 'moment';
import {DATE_FORMAT} from '../../../shared/data/constants';

import {EmploymentModalComponent} from '../employment-modal/employment-modal.component';
import {AppService} from '../../../shared/services';
import {Router} from '@angular/router';


@Component({
  selector: 'app-employment-form-field',
  templateUrl: './employment-form-field.component.html'
})
export class EmploymentFormFieldComponent{
  public dateFormat = DATE_FORMAT;
  @Input() public stepper: any;
  @Input() public isSubmitting: boolean;
  @Input() public field: any;
  @Input() public step: any;
  @Input() public formData: any;
  @Output() public submitForm: EventEmitter<any> = new EventEmitter();
  @ViewChild('onDisagreeModalTemplate', {static: true}) public disagreeModalTemplate;
  public objectKeys = Object.keys;
  public startCase = startCase;
  constructor(public dialog: MatDialog, private appService: AppService, private router: Router) {}

  private openModal(index = null, action) {
    const dialogRef = this.dialog.open(EmploymentModalComponent, {
      data: {
        field: this.field,
        currentActiveIndex: index,
        title: this.field.controlLabels.modal[action]
      },
      hasBackdrop: true,
      disableClose: true
    });
    return dialogRef;
  }

  isAddedGroupExits(group) {
    return find(this.field.groupValues, group);
  }

  onGroupNewGroupAdd() {
    const dialogRef = this.openModal(null, 'add');
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (this.field.isUnique && !this.isAddedGroupExits(result)) {
          this.field.groupValues.push(result);
        }
      }
    });
  }

  onGroupItemClicked(currentActiveIndex) {
    const dialogRef = this.openModal(currentActiveIndex, 'edit');
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (this.field.isUnique && this.isAddedGroupExits(result) && this.field.groupValues.length > 1) {
          this.field.groupValues.splice(currentActiveIndex, 1);
        } else {
          this.field.groupValues[currentActiveIndex] = result;
        }
      }
    });
  }

  onGroupItemRemoved(index) {
    this.field.groupValues.splice(index, 1);
  }

  public formatValue(value) {
    if (value instanceof Date) {
      return moment(value).format(DATE_FORMAT);
    }
    return value;
  }

  citizenshipCase() {
    // TODO: NEED TO COME UP WITH BETTER APPROACH FOR NOW TO AVOID COMPLICATOIN I HAVE DONE IT.
    if (this.field.name !== 'citizenship') {
      return;
    }
    const uscisNumber = 'lPRAlienNumber';
    const alienNumber = 'alienNumber';
    const i94Number = 'i94Number';
    const expireDate = 'alienExpirationDate';
    this.step.formGroup.controls[uscisNumber].disable();
    this.step.formGroup.controls[alienNumber].disable();
    this.step.formGroup.controls[i94Number].disable();
    this.step.formGroup.controls[expireDate].disable();
    if (this.field.formControl.value === 6) {
      this.step.formGroup.controls[uscisNumber].enable();
      return;
    } else if (this.field.formControl.value === 7) {
      this.step.formGroup.controls[alienNumber].enable();
      this.step.formGroup.controls[i94Number].enable();
      this.step.formGroup.controls[expireDate].enable();
    }
  }

  getErrorMessage() {
    const { formControl, label } = this.field;
    const { errors } = formControl;
    if (!errors) {
      return;
    }

    if (errors.matDatepickerParse) {
      return `Invalid Date should be ${DATE_FORMAT}`;
    }

    if (errors.matDatepickerMin) {
      return `${label} must be greater than ${moment(this.field.minValue).format(DATE_FORMAT)}`;
    }

    if (errors.matDatepickerMax) {
      return `${label} must not be greater than ${moment(this.field.maxValue).format(DATE_FORMAT)}`;
    }

    if (errors.required) {
      return `${label} is required`;
    }
    if (errors.min) {
      return `Value can not be less than ${this.field.minValue}`;
    }
    if (errors.max) {
      return `Value can not be greater than ${this.field.maxValue}`;
    }
    if (errors.email) {
      return 'Invalid Email';
    }

    if (errors.pattern) {
      return this.field.errorMessage ? this.field.errorMessage.pattern : '';
    }

    if (errors.invalidEndDate) {
      return errors.invalidEndDate;
    }
  }

  onDateChange() {
    if (this.field.isStartDate) {
      this.step.formGroup.controls.endDate.updateValueAndValidity();
    }
  }

  onTextBlur() {
    this.field.formControl.setValue(this.field.formControl.value.trim());
    this.field.formControl.updateValueAndValidity();
  }

  handleStepperNext(value) {
    this.field.formControl.setValue(value);
    this.stepper.next();
  }

  handlerDocumentDisagree() {
    if (this.field.required) {
      const modalRef = this.dialog.open(this.disagreeModalTemplate);
      modalRef.afterClosed().subscribe(disagreed => {
        if (disagreed) {
          this.appService.logoutUser();
        }
      });
      return;
    }
    this.stepper.next();
  }
}
