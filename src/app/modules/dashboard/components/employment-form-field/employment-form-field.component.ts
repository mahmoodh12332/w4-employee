import {Component, Input} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {find, startCase} from 'lodash';
import { DatePipe } from '@angular/common';

import {EmploymentModalComponent} from '../employment-modal/employment-modal.component';


@Component({
  selector: 'app-employment-form-field',
  templateUrl: './employment-form-field.component.html'
})
export class EmploymentFormFieldComponent {
  @Input() public field: any;
  public objectKeys = Object.keys;
  public startCase = startCase;
  constructor(public dialog: MatDialog, private datePipe: DatePipe) {}

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
      return this.datePipe.transform(value, 'dd/MM/yyyy');
    }
    return value;
  }
}
