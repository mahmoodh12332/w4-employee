import {Component, OnInit, ViewChild} from '@angular/core';
import {EmploymentBaseComponent} from '../employment-base.component';
import {AppService, CookieService} from '../../../shared/services';
import {EmploymentConfirmationForm} from '../../../shared/data/employment-form';
import {Custom, FORM_COOKIE_NAME} from '../../../shared/data/constants';
import {Router} from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import * as moment from 'moment';

@Component({
  selector: 'app-employment-confirmation',
  templateUrl: './employment-confirmation.component.html'
})
export class EmploymentConfirmationComponent extends EmploymentBaseComponent implements OnInit {
  public steps = EmploymentConfirmationForm;
  @ViewChild('DialogOverviewExampleDialog', {static: true}) public DialogOverviewExampleDialog;

  formData: any;
  isSubmitting: boolean;
  submitdata: any;
  objectApi: any;
  convertdata: any;
  constructor(cookieService: CookieService, private router: Router,
    private appService: AppService,
    public dialog: MatDialog
    ) {
    super(cookieService);
  }
  ngOnInit(): void {
    super.ngOnInit();
    this.formData = this.cookieService.getCookie(FORM_COOKIE_NAME);
  }
  flat(res, key, val, pre = '') {
    // const prefix = [pre, key].filter(v => v).join();
    const prefix = [ key].filter(v => v).join();
    return typeof val === 'object'
      ? Object.keys(val).reduce((prev, curr) => this.flat(prev, curr, val[curr], prefix), res)
      : Object.assign(res, { [prefix]: val});
  }
  flatObject(input) {
    return Object.keys(input).reduce((prev, curr) => this.flat(prev, curr, input[curr]), {});
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
  onFormSubmit(data) {
   const signature =  data.yourSignature.signature;
   const Newsignature = signature.substring(22)
   data.yourSignature.signature = Newsignature

   let versionName = {
    w4Version: +moment().format('YYYY'),
    w4LastDate: moment().format('MM/DD/YYYY'), // Year,
    }

    const formDataObj = JSON.parse(this.formData)
    const taxExempt =  formDataObj.w4Information.withholdTax;
   if(taxExempt === "EXEMPT"){
    formDataObj.w4Information.withholdTax = false
   }else {
    formDataObj.w4Information.withholdTax = true
   }
    let mergedObj = { ...data, ...formDataObj };
    let FinalObj = { ...mergedObj, ...versionName };

    if (data && data.fieldToVerify) {
      delete data.fieldToVerify.undefined;
    }
    this.convertdata = FinalObj
     this.objectApi = this.flatObject(this.convertdata)
    // this.cookieService.setCookie(FORM_COOKIE_NAME, JSON.stringify(data), 1);
    this.isSubmitting = true;
    this.appService.newSubmitApplication(this.objectApi).then((res) => {
      this.isSubmitting = false;
      this.openDialog()
    });
  }

}
function w4Version(w4Version: any, arg1: number) {
  throw new Error('Function not implemented.');
}

