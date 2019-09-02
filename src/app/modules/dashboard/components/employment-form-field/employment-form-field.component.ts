import {Component, Input} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {find} from 'lodash';

import {EmploymentModalComponent} from '../employment-modal/employment-modal.component';


@Component({
  selector: 'app-employment-form-field',
  templateUrl: './employment-form-field.component.html'
})
export class EmploymentFormFieldComponent {
  @Input() public field: any;
  constructor(public dialog: MatDialog) {}

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
}
