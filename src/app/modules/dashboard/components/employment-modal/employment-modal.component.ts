import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

import {EmploymentFormService} from '../../services';

@Component({
  selector: 'app-employment-modal',
  templateUrl: './employment-modal.component.html',
})
export class EmploymentModalComponent implements OnInit {
  public step: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<EmploymentModalComponent>,
    private employmentFormService: EmploymentFormService
  ) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    const { field, currentActiveIndex } = this.data;
    const values = currentActiveIndex !== null ? field.groupValues[currentActiveIndex] : {};
    this.step = this.employmentFormService.buildFormGroup(field, values);
  }

  closeModal() {
    this.dialogRef.close();
  }
  validateAllFormFields() {
    const {formGroup} = this.step;
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  }
  done() {
    if (!this.step.formGroup.valid) {
      this.validateAllFormFields();
      return;
    }
    this.dialogRef.close(this.step.formGroup.value);
  }
}
