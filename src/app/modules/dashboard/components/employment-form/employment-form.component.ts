import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {States} from '../../../shared/data/states';


const textTypeDefaultMinLength = 0;
const textTypeDefaultMaxLength = 255;
const Steps: Array<any> = [
  {
    name: 'basicInformation',
    label: 'Basic Information',
    fields: [
      {
        id: 'bi-ssn',
        name: 'ssn',
        label: 'SSN',
        type: 'text',
        defaultValue: '',
        isMasked: false,
        disabled: true,
        required: false,
        mask: null,
        minLength: textTypeDefaultMinLength,
        maxLength: textTypeDefaultMaxLength,
      },
      {
        id: 'bi-firstName',
        name: 'firstName',
        label: 'First Name',
        type: 'text',
        defaultValue: '',
        isMasked: false,
        disabled: false,
        mask: null,
        required: true,
        minLength: textTypeDefaultMinLength,
        maxLength: textTypeDefaultMaxLength,
      },
      {
        id: 'bi-middleInitial',
        name: 'middleInitial',
        label: 'Middle Initial',
        type: 'text',
        defaultValue: '',
        isMasked: true,
        disabled: false,
        mask: 'A{2}',
        required: false,
        minLength: 0,
        maxLength: 3,
        pattern: new RegExp('^[A-Z]{2}', 'g')
      },
      {
        id: 'bi-lastName',
        name: 'lastName',
        label: 'Last Name',
        type: 'text',
        defaultValue: '',
        isMasked: false,
        mask: null,
        required: true,
        minLength: textTypeDefaultMinLength,
        maxLength: textTypeDefaultMaxLength,
      },
      {
        id: 'bi-otherName',
        name: 'otherName',
        label: 'Other Name',
        type: 'text',
        defaultValue: '',
        isMasked: false,
        mask: null,
        required: false,
        minLength: textTypeDefaultMinLength,
        maxLength: textTypeDefaultMaxLength,
      },
      {
        id: 'bi-dateOfBirth',
        name: 'dateOfBirth',
        label: 'DOB',
        type: 'date',
        disabled: false,
        defaultValue: new Date(),
        isMasked: true,
        mask: 'd0/M0/0000',
        required: true,
        minValue: null,
        maxValue: null,
      },
      {
        id: 'bi-gender',
        name: 'gender',
        label: 'Gender',
        type: 'radioButton',
        isMasked: false,
        defaultValue: null,
        mask: null,
        options: [
          {
            label: 'Male',
            value: 'male',
          },
          {
            label: 'Female',
            value: 'female'
          }
        ],
        required: true,
        minValue: null,
        maxValue: null,
      }
    ]
  },
  {
    name: 'address',
    label: 'Address',
    fields: [
      {
        id: 'add-streetNo',
        name: 'streetNumber',
        label: 'Street Number',
        type: 'text',
        defaultValue: '',
        isMasked: false,
        disabled: false,
        required: true,
        mask: null,
        minLength: textTypeDefaultMinLength,
        maxLength: textTypeDefaultMaxLength,
      },
      {
        id: 'add-streetName',
        name: 'streetName',
        label: 'Street Name',
        type: 'text',
        defaultValue: '',
        isMasked: false,
        disabled: false,
        required: true,
        mask: null,
        minLength: textTypeDefaultMinLength,
        maxLength: textTypeDefaultMaxLength,
      },
      {
        id: 'add-apartmentNumber',
        name: 'apartmentNumber',
        label: 'Apartment Number',
        type: 'text',
        defaultValue: '',
        isMasked: false,
        disabled: false,
        required: false,
        mask: null,
        minLength: textTypeDefaultMinLength,
        maxLength: textTypeDefaultMaxLength,
      },
      {
        id: 'add-city',
        name: 'city',
        label: 'City',
        type: 'text',
        defaultValue: '',
        isMasked: false,
        disabled: false,
        required: true,
        mask: null,
        minLength: textTypeDefaultMinLength,
        maxLength: textTypeDefaultMaxLength,
      },
      {
        id: 'add-state',
        name: 'state',
        label: 'State',
        type: 'dropdown',
        options: States,
        defaultValue: '',
        isMasked: false,
        disabled: false,
        required: true,
        mask: null,
        minLength: null,
        maxLength: null,
      },
      {
        id: 'add-zipCode',
        name: 'zipCode',
        label: 'Zip Code',
        type: 'text',
        defaultValue: '',
        isMasked: true,
        disabled: false,
        required: true,
        mask: '00000',
        minLength: 0,
        pattern: new RegExp('^[0-9]{5}', 'g'),
        maxLength: 6,
      },
    ]
  },
  {
    name: 'phoneAndEmail',
    label: 'Phone and Email',
    fields: [
      {
        id: 'pe-homePhone',
        name: 'homePhone',
        label: 'Home Phone',
        type: 'text',
        defaultValue: '',
        isMasked: true,
        disabled: false,
        required: false,
        mask: '(000) - 000 - 0000',
        minLength: textTypeDefaultMinLength,
        maxLength: textTypeDefaultMaxLength,
      },
      {
        id: 'pe-mobilePhone',
        name: 'mobilePhone',
        label: 'Mobile Phone',
        type: 'text',
        defaultValue: '',
        isMasked: true,
        disabled: false,
        required: false,
        mask: '(000) - 000 - 0000',
        minLength: textTypeDefaultMinLength,
        maxLength: textTypeDefaultMaxLength,
      },
      {
        id: 'pe-email',
        name: 'email',
        label: 'Email',
        type: 'text',
        defaultValue: '',
        isMasked: false,
        isEmail: true,
        disabled: false,
        required: false,
        mask: null,
        minLength: textTypeDefaultMinLength,
        maxLength: textTypeDefaultMaxLength,
      },
    ]
  },
  {
    name: 'w4Information',
    label: 'W-4 Information',
    fields: [
      {
        id: 'w4i-maritalStatus',
        name: 'maritalStatus',
        label: 'Marital Status',
        type: 'radioButton',
        options: [
          {
            value: 'single',
            label: 'Single'
          },
          {
            value: 'married',
            label: 'Married'
          },
          {
            value: 'marriedBut',
            label: 'Married, but withhold at higher Single Rate'
          },
        ],
        defaultValue: '',
        isMasked: false,
        disabled: false,
        required: true,
        mask: null,
        minLength: null,
        maxLength: null,
      },
      {
        id: 'w4i-totalDependant',
        name: 'totalDependant',
        label: 'Total Dependant',
        type: 'number',
        defaultValue: '',
        isMasked: false,
        disabled: false,
        required: true,
        mask: null,
        minLength: null,
        maxLength: null,
        minValue: 1,
        maxValue: 10,
      },
      {
        id: 'w4i-taxExempt',
        name: 'taxExempt',
        label: 'Are you tax exempt',
        type: 'radioButton',
        defaultValue: '',
        options: [
          {
            value: 'yes',
            label: 'Yes'
          },
          {
            value: 'no',
            label: 'No'
          }
        ],
        isMasked: false,
        disabled: false,
        required: true,
        mask: null,
        minLength: null,
        maxLength: null,
      },
    ]
  },
  {
    name: 'emergencyContact',
    label: 'Emergency Contact',
    fields: [
      {
        id: 'ec-firstName',
        name: 'firstName',
        label: 'First Name',
        type: 'text',
        defaultValue: '',
        isMasked: false,
        disabled: false,
        mask: null,
        required: false,
        minLength: textTypeDefaultMinLength,
        maxLength: textTypeDefaultMaxLength,
      },
      {
        id: 'ec-lastName',
        name: 'lastName',
        label: 'Last Name',
        type: 'text',
        defaultValue: '',
        isMasked: false,
        mask: null,
        required: false,
        minLength: textTypeDefaultMinLength,
        maxLength: textTypeDefaultMaxLength,
      },
      {
        id: 'ec-homePhone',
        name: 'homePhone',
        label: 'Home Phone',
        type: 'text',
        defaultValue: '',
        isMasked: true,
        disabled: false,
        required: false,
        mask: '(000) - 000 - 0000',
        minLength: textTypeDefaultMinLength,
        maxLength: textTypeDefaultMaxLength,
      },
      {
        id: 'ec-mobilePhone',
        name: 'mobilePhone',
        label: 'Mobile Phone',
        type: 'text',
        defaultValue: '',
        isMasked: true,
        disabled: false,
        required: false,
        mask: '(000) - 000 - 0000',
        minLength: textTypeDefaultMinLength,
        maxLength: textTypeDefaultMaxLength,
      },
      {
        id: 'ec-relationship',
        name: 'relationship',
        label: 'Relationship',
        type: 'text',
        defaultValue: '',
        isMasked: false,
        disabled: false,
        mask: null,
        required: false,
        minLength: textTypeDefaultMinLength,
        maxLength: textTypeDefaultMaxLength,
      },
    ]
  },
  {
    name: 'identificationDocuments',
    label: 'Identification Documents',
    fields: [
      {
        id: 'identDoc-identification',
        name: 'identification',
        label: 'Identification',
        type: 'radioButton',
        options: [
          {
            label: 'Driver License',
            value: 'driverLicense'
          },
          {
            label: 'Commercial Driver License',
            value: 'commercialDriverLicense'
          },
          {
            label: 'State ID',
            value: 'stateId'
          },
        ],
        defaultValue: '',
        isMasked: false,
        disabled: false,
        mask: null,
        required: false,
        minLength: null,
        maxLength: null,
      },
      {
        id: 'identDoc-document',
        name: 'document',
        label: 'Document',
        type: 'text',
        defaultValue: '',
        isMasked: false,
        disabled: false,
        mask: null,
        required: false,
        minLength: textTypeDefaultMinLength,
        maxLength: textTypeDefaultMaxLength,
      },
      {
        id: 'identDoc-issueState',
        name: 'issueState',
        label: 'Issue State',
        type: 'dropdown',
        options: States,
        defaultValue: '',
        isMasked: false,
        disabled: false,
        mask: null,
        required: false,
        minLength: null,
        maxLength: null,
      },
      {
        id: 'identDoc-expireDate',
        name: 'expireDate',
        label: 'Exp. Date (if any)',
        type: 'date',
        defaultValue: '',
        isMasked: false,
        disabled: false,
        mask: null,
        required: false,
        minLength: null,
        maxLength: null,
      },
    ]
  },
  {
    name: 'citizenship',
    label: 'Citizenship',
    fields: [
      {
        id: 'citizen-citizenship',
        name: 'citizenship',
        label: 'Citizenship',
        type: 'radioButton',
        options: [
          {
            label: 'A citizen of the United States',
            value: 'usCitizen'
          },
          {
            label: 'A noncitizen national of the United States',
            value: 'nonUSCitizen'
          },
          {
            label: 'A lawful permanent resident',
            value: 'lawfulPermanentResident'
          },
          {
            label: 'An alien authorized to work',
            value: 'alien'
          },
        ],
        defaultValue: '',
        isMasked: false,
        disabled: false,
        mask: null,
        required: false,
        minLength: null,
        maxLength: null,
      },
    ]
  },
  {
    name: 'workHistory',
    label: 'Work History',
    fields: [
      {
        id: 'wh-serviceBaseExp',
        name: 'serviceBaseExp',
        label: 'Have you ever worked for a temporary employment service before?',
        type: 'radioButton',
        options: [
          {
            label: 'Yes',
            value: 'yes'
          },
          {
            label: 'No',
            value: 'no'
          }
        ],
        defaultValue: '',
        isMasked: false,
        mask: null,
        required: false,
        minLength: null,
        maxLength: null,
      },
      {
        id: 'wh-aboutUs',
        name: 'aboutUs',
        label: 'How did you hear about us?',
        type: 'text',
        defaultValue: '',
        isMasked: false,
        mask: null,
        required: false,
        minLength: textTypeDefaultMinLength,
        maxLength: textTypeDefaultMaxLength,
      }
    ]
  }
];
@Component({
  selector: 'app-employment-form',
  templateUrl: './employment-form.component.html'
})
export class EmploymentFormComponent implements OnInit {
  stepFormGroups: Array<any> = [];
  constructor() {}

  ngOnInit(): void {
    this.initStepFormGroups();
  }

  initStepFormGroups(): void {
    this.stepFormGroups = Steps.map( (step): any => {
      const formControlForGroup = {};
      const fields = [];
      step.fields.forEach((field) => {
        const validators = [];
        if (field.required) {
          validators.push(Validators.required);
        }
        if (field.minValue) {
          validators.push(Validators.min(field.minValue));
        }
        if (field.maxValue) {
          validators.push(Validators.max(field.maxValue));
        }
        if (field.minLength) {
          validators.push(Validators.minLength(field.minLength));
        }
        if (field.maxLength) {
          validators.push(Validators.maxLength(field.maxLength));
        }
        if (field.isEmail) {
          validators.push(Validators.email);
        }
        if (field.pattern) {
          validators.push(Validators.pattern(field.pattern));
        }
        const formControl = new FormControl({
          value: '',
          disabled: field.disabled,
        }, validators);
        fields.push({
          ...field,
          formControl
        });
        formControlForGroup[field.name] = formControl;
      });
      const formGroup = new FormGroup(formControlForGroup);
      return {
        ...step,
        formGroup,
        fields,
      };
    });
  }

  get formValue() {
    const data = {};
    this.stepFormGroups.forEach((step) => data[step.name] = step.formGroup.value);
    return data;
  }

  submitForm(): void {
    console.log(this.formValue);
  }
}
