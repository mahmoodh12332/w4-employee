import {Component, OnInit, ViewChild} from '@angular/core';
import {forEach} from 'lodash';
import {EmploymentBaseComponent} from '../employment-base.component';
import {AppService, CookieService} from '../../../shared/services';
import {
  EmploymentContractForm,
  EmploymentFormForWorkWell,
  EmploymentFormForAmerigasCode,
} from '../../../shared/data/employment-form';
import {
  AMERIGAS_WEB_CODE, SAN_ANTONIO_WEB_CODE,
  PAYROLL_WEB_CODES,
  FLORIDA_AND_GEO_GROUP_WEB_CODES,
} from '../../../shared/data/constants';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-employment-contract',
  templateUrl: './employment-contract.component.html'
})
export class EmploymentContractComponent extends EmploymentBaseComponent implements OnInit {
  public steps = [...EmploymentContractForm];
  public isSubmitting = false;
  @ViewChild('DialogOverviewExampleDialog', {static: true}) public DialogOverviewExampleDialog;

  constructor(
    cookieService: CookieService,
    private appService: AppService,
    public dialog: MatDialog
  ) {
    super(cookieService);
  }
  ngOnInit(): void {
    super.ngOnInit();
    this.handleWorkWellCodeCase();
    this.handleWorkCompensationWebCodeCase();
    this.handleAMG01CodeCase();
    this.setLastFormButtonLabel();
    this.changeStepperLabelAsPerNamingConvention();
  }

  private handleAMG01CodeCase() {
    if (this.appService.siteCode === AMERIGAS_WEB_CODE) {
      this.steps.splice(this.steps.length - 1, 0, ...EmploymentFormForAmerigasCode);
    }
  }

  private handleWorkWellCodeCase() {
    const shouldAddWorkWell = [
      SAN_ANTONIO_WEB_CODE,
      ...PAYROLL_WEB_CODES
    ].indexOf(this.appService.siteCode) !== -1;
    if (shouldAddWorkWell) {
      this.steps.splice(this.steps.length - 1, 0, ...EmploymentFormForWorkWell);
    }
  }

  private handleWorkCompensationWebCodeCase() {
    const indexOfWorkCompensationForm = this.steps.findIndex((f) => f.name === 'workerComp');
    const removeWorkCompensation = FLORIDA_AND_GEO_GROUP_WEB_CODES.indexOf(this.appService.siteCode) !== -1;
    if (removeWorkCompensation) {
      this.steps.splice(indexOfWorkCompensationForm, 1);
    }
  }

  private setLastFormButtonLabel() {
    const lastStep = this.steps[this.steps.length - 2];
    lastStep.fields[lastStep.fields.length - 1].controlLabels = {
      buttons: {
        agree: 'Let\'s Sign Contract',
          disagree: 'I disagree',
      }
    };
  }

  private changeStepperLabelAsPerNamingConvention() {
    forEach(this.steps, (step) => {
      forEach(this.appService.siteNamingConvention, (value, key) => {
        step.label = step.label.replace(`{{${key}}}`, value);
      });
    });
  }

  onFormSubmit() {
    this.isSubmitting = true;
    this.appService.submitApplication(this.formValues).then((res) => {
      this.isSubmitting = false;
      this.openDialog()
    });
  }
  openDialog():  void {
    const SubmitdialogRef = this.dialog.open(this.DialogOverviewExampleDialog,
      { disableClose: true }
      );

    SubmitdialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed bvgvgvgvvgvhggwq');
    });
  }
  onNoClick(){
    this.appService.logoutUser();
   }
}
