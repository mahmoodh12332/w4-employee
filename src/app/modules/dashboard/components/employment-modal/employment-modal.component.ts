import {Component, ComponentFactoryResolver, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

import {EmploymentFormService} from '../../services';
import {DocumentHostDirective} from '../../../shared/directives';

@Component({
  selector: 'app-employment-modal',
  templateUrl: './employment-modal.component.html',
})
export class EmploymentModalComponent implements OnInit {
  public step: any;
  @ViewChild(DocumentHostDirective, {static: true}) documentHost: DocumentHostDirective;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<EmploymentModalComponent>,
    private employmentFormService: EmploymentFormService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
  }

  ngOnInit(): void {
    this.buildForm();
  }
  buildForm() {
    const { field, currentActiveIndex } = this.data;
    const values = currentActiveIndex !== null ? field.groupValues[currentActiveIndex] : {};
    this.step = this.employmentFormService.buildFormGroup(field, values);
    this.renderIfCustomComponent();
  }
  renderIfCustomComponent() {
    if (this.step.useCustomComponent) {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.step.useCustomComponent);
      const componentRef: any = this.documentHost.viewContainerRef.createComponent(componentFactory);
      componentRef.instance.step = this.step;
    }
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
    this.dialogRef.close(this.step.formGroup.getRawValue());
  }
}
