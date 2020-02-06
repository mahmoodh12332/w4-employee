import {Component, EventEmitter, Input, Output, ViewChild, OnChanges, SimpleChanges, OnInit, AfterViewInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {find, startCase, get} from 'lodash';
import * as moment from 'moment';
import {DATE_FORMAT} from '../../../shared/data/constants';

import {EmploymentModalComponent} from '../employment-modal/employment-modal.component';
import {AppService} from '../../../shared/services';
import {Router} from '@angular/router';
import {Helper} from '../../../shared/classes/helper';
import {Countries} from '../../../shared/data/countries';
import {States} from '../../../shared/data/states';


@Component({
  selector: 'app-employment-form-field',
  templateUrl: './employment-form-field.component.html'
})
export class EmploymentFormFieldComponent implements AfterViewInit {
  public dateFormat = DATE_FORMAT;
  @Input() public stepper: any;
  @Input() public isSubmitting: boolean;
  @Input() public field: any;
  @Input() public step: any;
  @Input() public formData: any;
  @Output() public submitForm: EventEmitter<any> = new EventEmitter();
  @ViewChild('onDisagreeModalTemplate', {static: true}) public disagreeModalTemplate;
  @ViewChild('directDepositPopUp', {static: true}) public directDepositPopUp;
  public objectKeys = Object.keys;
  public startCase = startCase;
  constructor(public dialog: MatDialog, private appService: AppService, private router: Router) {}

  ngAfterViewInit(): void {
    this.handleOnChangeActions(['directDepositPopup']);
  }

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

  public formatGroupValue(value) {
    if (value instanceof Date || Helper.isDateString(value)) {
      return moment(value).format(DATE_FORMAT);
    }
    return value;
  }

  handleOnChangeActions(actionsToIgnore = []) {
    if (!this.field.changeActions) {
      return;
    }
    const actionsToPerform = this.field.changeActions[this.field.formControl.value] || [];
    actionsToPerform
      .filter(a => !actionsToIgnore.find(k => a.action === k))
      .forEach((a) => {
        switch (a.action) {
          case 'enable':
            this.performEnableActions(a.fields);
            break;
          case 'disable':
            this.performDisableActions(a.fields);
            break;
          case 'directDepositPopup':
            this.showPopUpForDirectDeposit();
            break;
          default:
            console.log('No Action found');
        }
      });
  }
  private performEnableActions(fieldsToEnable: Array<string>) {
    fieldsToEnable.forEach((name) => {
      this.step.formGroup.controls[name].enable();
    });
  }
  private performDisableActions(fieldsToEnable: Array<string>) {
    fieldsToEnable.forEach((name) => {
      this.step.formGroup.controls[name].disable();
      this.step.formGroup.controls[name].reset();
    });
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
    if (this.field.formControl.value) {
      this.field.formControl.setValue(this.field.formControl.value.trim());
    }
    this.field.formControl.updateValueAndValidity();
  }

  handleStepperNext(value) {
    this.field.formControl.setValue(value);
    if (this.field.submitOnNext) {
      this.submitForm.emit();
      return;
    }
    this.stepper.next();
  }

  handlerDocumentDisagree() {
    if (!this.field.canDisagree) {
      const modalRef = this.dialog.open(this.disagreeModalTemplate);
      modalRef.afterClosed().subscribe(disagreed => {
        if (disagreed) {
          this.appService.logoutUser();
        }
      });
      return;
    }
    this.field.formControl.setValue(false);
    this.stepper.next();
  }

  processValueAccessor() {
    let value = '';
    if (this.field.id === 'ftv-address') {
      value = this.processAddressAccessor();
    } else if (typeof this.field.valueAccessor === 'string') {
      value = get(this.formData, this.field.valueAccessor, '-');
      if (this.field.isDate) {
        value = moment(value, 'YYYY-MM-DD').format(DATE_FORMAT);
      }
    }
    return value;
  }

  processAddressAccessor() {
    const {
      streetNo,
      address,
      zipCode,
      city
    } = get(this.formData, 'address');
    const state = this.getValueStateORCountryDetail('address.state', 'state');
    return `${streetNo} ${address}, ${city}, ${state}, ${zipCode}`;
  }

  getValueStateORCountryDetail(path, type) {
    const targetArray = {
      country: Countries,
      state: States
    };
    const value = get(this.formData, path);
    return (find(targetArray[type], (k) => k.value === value) || {label: ''}).label;
  }

  handleVerificationLinkClick() {
    this.router.navigate([this.field.onBackLink]);
  }

  showPopUpForDirectDeposit() {
    this.dialog.open(this.directDepositPopUp);
  }
}
