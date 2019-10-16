import * as moment from 'moment';
import {States} from './states';
import {Skills} from './skills';
import {Levels} from './level';
import {Countries} from './countries';
import {
  ArbitrationAgreementPolicyComponent,
  CellularPhonePolicyComponent,
  ConfidentialityAgreementPolicyComponent,
  DrugAndAlcoholPolicyComponent,
  EmploymentContractPolicyComponent,
  FcrAuthPolicyComponent,
  MedicalReleasePolicyComponent,
  PayrollDeductionAuthorizationPolicyComponent,
  ProfessionalLanguageAndBehaviourPolicyComponent,
  SexualHarasmentPolicyComponent,
  SignInFormComponent,
  UnlawfullEmploymentPracticePolicyComponent,
  UnsafeWorkingConditionsPolicyComponent,
  WaiverOfRightToTrialByJuryPolicyComponent,
  WorkersCompTxPolicyComponent,
  TransportationAgreementComponent,
  WelcomeToPPSCompanyPoliciesAndProceduresComponent,
  ProhibitedWorkPolicyComponent, W4FormComponent,
} from '../../dashboard/components/documents';
import {SkillsComponent} from '../../dashboard/components/skills/skills-component';
import {UscisI9FormComponent} from '../../dashboard/components/documents/uscis-i-9-form/uscis-i-9-form.component';

const textTypeDefaultMinLength = 0;
const textTypeDefaultMaxLength = 255;
const commonFieldsForDocumentType = {
  name: 'contractAgree',
  label: '',
  type: 'document',
  required: true,
  isFullWidthField: true,
  isPanEnabled: false,
  controlLabels: {
    buttons: {
      agree: 'I agree, Next',
      disagree: 'I disagree',
    }
  }
};

export const EmploymentApplicationForm: Array<any> = [
  {
    name: 'basicInformation',
    label: 'Basic Information',
    fields: [
      {
        id: 'bi-ssn',
        name: 'socialSecurityNo',
        label: 'SSN',
        type: 'text',
        defaultValue: '',
        isFullWidthField: false,
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
        isFullWidthField: false,
        mask: null,
        required: true,
        minLength: textTypeDefaultMinLength,
        maxLength: textTypeDefaultMaxLength,
      },
      {
        id: 'bi-middleInitial',
        name: 'middleName',
        label: 'Middle Initial',
        type: 'text',
        defaultValue: '',
        isMasked: false,
        isFullWidthField: false,
        disabled: false,
        mask: null,
        required: false,
        minLength: textTypeDefaultMinLength,
        maxLength: textTypeDefaultMaxLength
      },
      {
        id: 'bi-lastName',
        name: 'lastName',
        label: 'Last Name',
        type: 'text',
        defaultValue: '',
        isMasked: false,
        isFullWidthField: false,
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
        isFullWidthField: false,
        defaultValue: '',
        isMasked: false,
        mask: null,
        required: false,
        minLength: textTypeDefaultMinLength,
        maxLength: textTypeDefaultMaxLength,
      },
      {
        id: 'bi-dateOfBirth',
        name: 'birthDate',
        label: 'DOB',
        isFullWidthField: false,
        type: 'date',
        disabled: false,
        defaultValue: new Date(),
        isMasked: true,
        mask: 'd0/M0/0000',
        required: true,
        minValue: moment().subtract(100, 'years').toDate(),
        maxValue: moment().subtract(10, 'years').toDate(),
      },
      {
        id: 'bi-gender',
        name: 'gender',
        label: 'Gender',
        isFullWidthField: true,
        type: 'radioButton',
        isMasked: false,
        defaultValue: null,
        mask: null,
        options: [
          {
            label: 'Male',
            value: 'M',
          },
          {
            label: 'Female',
            value: 'F'
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
        name: 'streetNo',
        label: 'Street Number',
        type: 'text',
        defaultValue: '',
        isFullWidthField: false,
        isMasked: false,
        disabled: false,
        required: true,
        mask: null,
        minLength: textTypeDefaultMinLength,
        maxLength: textTypeDefaultMaxLength,
      },
      {
        id: 'add-streetName',
        name: 'address',
        label: 'Street Name',
        type: 'text',
        defaultValue: '',
        isMasked: false,
        isFullWidthField: false,
        disabled: false,
        required: true,
        mask: null,
        minLength: textTypeDefaultMinLength,
        maxLength: textTypeDefaultMaxLength,
      },
      {
        id: 'add-apartmentNumber',
        name: 'aptno',
        label: 'Apartment Number',
        type: 'text',
        defaultValue: '',
        isMasked: false,
        isFullWidthField: false,
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
        isFullWidthField: false,
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
        isFullWidthField: false,
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
        isFullWidthField: false,
        type: 'text',
        defaultValue: '',
        isMasked: true,
        disabled: false,
        required: true,
        mask: '00000',
        minLength: 0,
        pattern: /^[0-9]{5}/,
        errorMessage: {
          pattern: 'Should be 5 digit number'
        },
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
        name: 'phone',
        label: 'Home Phone',
        isFullWidthField: false,
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
        name: 'altPhone',
        label: 'Mobile Phone',
        isFullWidthField: false,
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
        isFullWidthField: false,
        defaultValue: '',
        isMasked: false,
        pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{1,63}$/,
        errorMessage: {
          pattern: 'Invalid Email'
        },
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
        name: 'w4MaritalStatus',
        label: 'Marital Status',
        type: 'radioButton',
        isFullWidthField: true,
        options: [
          {
            value: 'S',
            label: 'Single'
          },
          {
            value: 'M',
            label: 'Married'
          },
          {
            value: 'H',
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
        name: 'w4TotalAllowances',
        label: 'Total Dependant',
        type: 'number',
        isFullWidthField: false,
        defaultValue: '',
        isMasked: false,
        disabled: false,
        required: true,
        mask: null,
        minLength: null,
        maxLength: null,
        minValue: 0,
        maxValue: 10,
      },
      {
        id: 'w4i-taxExempt',
        name: 'w4_Exempt',
        label: 'Are you tax exempt',
        type: 'radioButton',
        defaultValue: '',
        options: [
          {
            value: true,
            label: 'Yes'
          },
          {
            value: false,
            label: 'No'
          }
        ],
        isFullWidthField: true,
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
        name: 'contactFirst',
        label: 'First Name',
        type: 'text',
        isFullWidthField: false,
        defaultValue: '',
        isMasked: false,
        disabled: false,
        mask: null,
        minLength: textTypeDefaultMinLength,
        maxLength: textTypeDefaultMaxLength,
      },
      {
        id: 'ec-lastName',
        name: 'contactLast',
        label: 'Last Name',
        type: 'text',
        isFullWidthField: false,
        defaultValue: '',
        isMasked: false,
        mask: null,
        required: false,
        minLength: textTypeDefaultMinLength,
        maxLength: textTypeDefaultMaxLength,
      },
      {
        id: 'ec-homePhone',
        name: 'contactHome',
        label: 'Home Phone',
        type: 'text',
        isFullWidthField: false,
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
        name: 'contactMobile',
        label: 'Mobile Phone',
        type: 'text',
        isFullWidthField: false,
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
        name: 'contactRelationship',
        label: 'Relationship',
        type: 'text',
        defaultValue: '',
        isFullWidthField: false,
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
        name: 'dmvType',
        label: 'Identification',
        type: 'radioButton',
        isFullWidthField: true,
        options: [
          {
            label: 'Driver License',
            value: 'DL'
          },
          {
            label: 'Commercial Driver License',
            value: 'CD'
          },
          {
            label: 'State ID',
            value: 'ID'
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
        name: 'dMVDocumentNbr',
        label: 'Document',
        isFullWidthField: false,
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
        name: 'stateIssuingAuthority',
        label: 'Issue State',
        type: 'dropdown',
        isFullWidthField: false,
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
        name: 'dmvExpirationDate',
        label: 'Exp. Date (if any)',
        type: 'date',
        defaultValue: '',
        isFullWidthField: false,
        isMasked: false,
        disabled: false,
        mask: null,
        required: false,
        minValue: new Date(),
        maxValue: null,
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
        isFullWidthField: true,
        options: [
          {
            label: 'A citizen of the United States',
            value: 4
          },
          {
            label: 'A noncitizen national of the United States',
            value: 5
          },
          {
            label: 'A lawful permanent resident',
            value: 6
          },
          {
            label: 'An alien authorized to work until expiration',
            value: 7
          },
        ],
        defaultValue: '',
        isMasked: false,
        disabled: false,
        mask: null,
        required: true,
        minLength: null,
        maxLength: null,
      },
      {
        id: 'citizen-uscisNumber',
        name: 'lPRAlienNumber',
        label: 'USCIS #',
        isFullWidthField: false,
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
        id: 'citizen-expireDate',
        name: 'alienExpirationDate',
        label: 'Expiration Date (if any)',
        type: 'date',
        isFullWidthField: true,
        defaultValue: '',
        isMasked: false,
        disabled: true,
        mask: null,
        required: false,
        minLength: null,
        maxLength: null,
      },
      {
        id: 'citizen-alienNumber',
        name: 'alienNumber',
        label: 'Alien Registration Number',
        bottomText: 'OR',
        showFieldNumber: '1',
        type: 'text',
        isFullWidthField: true,
        defaultValue: '',
        isMasked: false,
        disabled: true,
        required: false,
        mask: null,
        minLength: textTypeDefaultMinLength,
        maxLength: textTypeDefaultMaxLength,
      },
      {
        id: 'citizen-i94Number',
        name: 'i94Number',
        label: 'Form I-94 Admission Number',
        showFieldNumber: '2',
        type: 'text',
        bottomText: 'OR',
        isFullWidthField: true,
        defaultValue: '',
        isMasked: false,
        disabled: true,
        required: false,
        mask: null,
        minLength: textTypeDefaultMinLength,
        maxLength: textTypeDefaultMaxLength,
      },
      {
        id: 'citizen-foreignPassportNumber',
        name: 'foreignPassportNumber',
        label: 'Foreign Passport Number',
        showFieldNumber: '3',
        type: 'text',
        isFullWidthField: true,
        defaultValue: '',
        isMasked: false,
        disabled: true,
        required: false,
        mask: null,
        minLength: textTypeDefaultMinLength,
        maxLength: textTypeDefaultMaxLength,
      },
      {
        id: 'citizen-countryOfIssuance',
        name: 'countryOfIssuance',
        label: 'Country Of Issuance',
        type: 'dropdown',
        options: Countries,
        isFullWidthField: true,
        defaultValue: '',
        isMasked: false,
        disabled: true,
        required: false,
        mask: null,
        minLength: textTypeDefaultMinLength,
        maxLength: textTypeDefaultMaxLength,
      },
    ]
  },
  {
    name: 'skills',
    label: 'Skills',
    fields: [
      {
        id: 'skills-skills',
        name: 'skills',
        label: 'Skills',
        type: 'group',
        isFullWidthField: true,
        useCustomComponent: SkillsComponent,
        controlLabels: {
          modal: {
            add: 'Add Skill',
            edit: 'Edit Skill',
            remove: 'Remove Skill',
          },
          buttons: {
            add: 'Add New Skill',
            edit: 'Edit',
            remove: 'Remove',
          },
        },
        isUnique: true,
        fields: [
          {
            id: 'skill-skillName',
            name: 'skillName',
            label: 'Skill',
            type: 'dropdown',
            options: Skills,
            defaultValue: '',
            isFullWidthField: false,
            isMasked: false,
            disabled: false,
            required: true,
            mask: null,
            minLength: null,
            maxLength: null,
          },
          {
            id: 'skill-level',
            name: 'level',
            label: 'Level',
            type: 'dropdown',
            options: Levels,
            isFullWidthField: false,
            defaultValue: '',
            isMasked: false,
            disabled: false,
            required: true,
            mask: null,
            minLength: null,
            maxLength: null,
          },
          {
            id: 'skill-years',
            name: 'years',
            label: 'Years',
            type: 'dropdown',
            isFullWidthField: false,
            options: [
              {
                label: 'Less than a Year',
                value: 'Less than a Year',
              },
              {
                label: '1 to 3 Years',
                value: '1 to 3 Years',
              },
              {
                label: '3 to 5 Years',
                value: '3 to 5 Years',
              },
              {
                label: '5 Years or more',
                value: '5 Years or more',
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
        ],
        groupValues: [],
      },
    ],

  },
  {
    name: 'workHistory',
    label: 'Work History',
    fields: [
      {
        id: 'wh-serviceBaseExp',
        name: 'workTemp',
        label: 'Have you ever worked for a temporary employment service before?',
        type: 'radioButton',
        isFullWidthField: true,
        options: [
          {
            label: 'Yes',
            value: true,
          },
          {
            label: 'No',
            value: false
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
        id: 'wh-history',
        name: 'workHistories',
        label: 'History',
        type: 'group',
        isFullWidthField: true,
        isUnique: true,
        controlLabels: {
          modal: {
            add: 'Add History',
            edit: 'Edit History',
            remove: 'Remove History',
          },
          buttons: {
            add: 'Add Work History',
            edit: 'Edit',
            remove: 'Remove',
          },
        },
        fields: [
          {
            id: 'wh-history-companyName',
            name: 'company',
            label: 'Company',
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
            id: 'wh-history-startDate',
            name: 'startDate',
            label: 'Start Date',
            type: 'date',
            disabled: false,
            defaultValue: new Date(),
            isMasked: true,
            isStartDate: true,
            mask: 'd0/M0/0000',
            required: false,
            minValue: null,
            maxValue: new Date(),
          },
          {
            id: 'wh-history-endDate',
            name: 'endDate',
            label: 'End Date',
            type: 'date',
            disabled: false,
            isEndDate: true,
            defaultValue: new Date(),
            isMasked: true,
            mask: 'd0/M0/0000',
            required: false,
            minValue: null,
            maxValue: null,
          },
          {
            id: 'wh-history-supervisor',
            name: 'supervisor',
            label: 'Supervisor',
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
            id: 'wh-history-phone',
            name: 'phone',
            label: 'Phone',
            type: 'text',
            defaultValue: '',
            isMasked: true,
            disabled: false,
            required: false,
            mask: '(000) 000-0000',
            minLength: textTypeDefaultMinLength,
            maxLength: textTypeDefaultMaxLength,
          },
          {
            id: 'wh-history-payRate',
            name: 'payRate',
            label: 'Pay Rate',
            type: 'number',
            defaultValue: '',
            isMasked: false,
            disabled: false,
            required: true,
            mask: null,
            minLength: null,
            maxLength: null,
            minValue: 1,
            maxValue: 99999,
          },
          {
            id: 'wh-history-typeOfWork',
            name: 'typeOfWork',
            label: 'Type of work',
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
            id: 'wh-history-reasonLeaving',
            name: 'reasonForLeaving',
            label: 'Reason Leaving',
            type: 'text',
            defaultValue: '',
            isMasked: false,
            disabled: false,
            required: false,
            mask: null,
            minLength: textTypeDefaultMinLength,
            maxLength: textTypeDefaultMaxLength,
          },
        ],
        groupValues: [],
      },
    ]
  },
  {
    name: 'aboutUs',
    label: 'About Us',
    fields: [
      {
        id: 'au-aboutUs',
        name: 'hearAboutUs',
        label: 'How did you hear about us?',
        type: 'text',
        isFullWidthField: false,
        defaultValue: '',
        isMasked: false,
        mask: null,
        required: false,
        minLength: textTypeDefaultMinLength,
        maxLength: textTypeDefaultMaxLength,
      },
      {
        id: 'ad-done',
        name: 'formSubmit',
        type: 'submit',
        isFullWidthField: true,
        label: 'Continue to verification'
      }
    ]
  }
];
export const EmploymentConfirmationForm: Array<any> = [
  {
    name: 'fieldToVerify',
    label: 'Verify Information',
    fields: [
      {
        id: 'ftv-firstName',
        label: 'First Name',
        type: 'displayValue',
        isFullWidthField: false,
        required: false,
        valueAccessor: 'basicInformation.firstName',
      },
      {
        id: 'ftv-lastName',
        label: 'Last Name',
        type: 'displayValue',
        required: false,
        isFullWidthField: false,
        valueAccessor: 'basicInformation.lastName',
      },
      {
        id: 'ftv-ssn',
        label: 'SSN',
        type: 'displayValue',
        required: false,
        isFullWidthField: false,
        valueAccessor: 'basicInformation.socialSecurityNo',
      },
      {
        id: 'ftv-dateOfBirth',
        label: 'DOB',
        type: 'displayValue',
        required: false,
        isFullWidthField: false,
        valueAccessor: 'basicInformation.birthDate',
      },
      {
        id: 'ftv-address',
        label: 'Address',
        type: 'displayValue',
        required: false,
        isFullWidthField: false,
        valueAccessor: 'address.address',
      },
      {
        id: 'ftv-phone',
        label: 'Phone Number',
        type: 'displayValue',
        required: false,
        isFullWidthField: false,
        valueAccessor: 'phoneAndEmail.phone',
      },
      {
        id: 'ftv-email',
        label: 'Email',
        type: 'displayValue',
        required: false,
        isFullWidthField: false,
        valueAccessor: 'phoneAndEmail.email',
      },
      {
        id: 'ftv-verificationControls',
        type: 'verificationControls',
        name: 'contractAgree',
        required: true,
        isFullWidthField: true,
        controlLabels: {
          buttons: {
            verify: 'Confirm',
            back: 'Edit Info',
          }
        },
        onBackLink: '/dashboard/employment-application'
      }
    ]
  },
  {
    name: 'uscisI9Form',
    label: 'USCIS Form I9',
    fields: [
      {
        componentRef: UscisI9FormComponent,
        ...commonFieldsForDocumentType,
        isPanEnabled: true,
      }
    ]
  },
  {
    name: 'w4Form',
    label: 'Form W-4',
    fields: [
      {
        componentRef: W4FormComponent,
        ...commonFieldsForDocumentType,
        isPanEnabled: true,
        submitOnNext: true,
        controlLabels: {
          buttons: {
            agree: 'Continue to Contracts',
            disagree: 'I disagree',
          }
        }
      }
    ]
  },
];
export const EmploymentContractForm: Array<any> = [
  {
    name: 'employmentContract',
    label: 'Employment Contract',
    fields: [
      {
        componentRef: EmploymentContractPolicyComponent,
        ...commonFieldsForDocumentType,
      }
    ]
  },
  {
    name: 'cellularPhonePolicy',
    label: 'Cellular Phone Policy',
    fields: [
      {
        componentRef: CellularPhonePolicyComponent,
        ...commonFieldsForDocumentType,
      }
    ]
  },
  {
    name: 'drugAndAlcohol',
    label: 'Drug and Alcohol Policy',
    fields: [
      {
        componentRef: DrugAndAlcoholPolicyComponent,
        ...commonFieldsForDocumentType,
      }
    ]
  },
  {
    name: 'fcrAuth',
    label: 'FCRA Authorization and Disclosure',
    fields: [
      {
        componentRef: FcrAuthPolicyComponent,
        ...commonFieldsForDocumentType,
      }
    ]
  },
  {
    name: 'workerComp',
    label: 'Workers Comp (TX)',
    fields: [
      {
        componentRef: WorkersCompTxPolicyComponent,
        ...commonFieldsForDocumentType,
      }
    ]
  },
  {
    name: 'medicalRelease',
    label: 'Medical Release',
    fields: [
      {
        componentRef: MedicalReleasePolicyComponent,
        ...commonFieldsForDocumentType,
        required: false,
        name: 'medicalAuthorization'
      }
    ]
  },
  {
    name: 'payrollDeductionAuthorization',
    label: 'Payroll Deduction Authorization',
    fields: [
      {
        componentRef: PayrollDeductionAuthorizationPolicyComponent,
        ...commonFieldsForDocumentType,
      }
    ]
  },
  {
    name: 'professionalLanguageAndBehaviourPolicy',
    label: 'Professional Language And Behavior Policy',
    fields: [
      {
        componentRef: ProfessionalLanguageAndBehaviourPolicyComponent,
        ...commonFieldsForDocumentType,
      }
    ]
  },
  {
    name: 'sexualHarassment',
    label: 'Sexual Harassment Policy',
    fields: [
      {
        componentRef: SexualHarasmentPolicyComponent,
        ...commonFieldsForDocumentType,
      }
    ]
  },
  {
    name: 'signIn',
    label: 'Sign In',
    fields: [
      {
        componentRef: SignInFormComponent,
        ...commonFieldsForDocumentType,
      }
    ]
  },
  {
    name: 'transportationAgreement',
    label: 'Transportation Agreement',
    fields: [
      {
        componentRef: TransportationAgreementComponent,
        ...commonFieldsForDocumentType,
      }
    ]
  },
  {
    name: 'unlawfullEmployment',
    label: 'Unlawful Employment Practices Policy',
    fields: [
      {
        componentRef: UnlawfullEmploymentPracticePolicyComponent,
        ...commonFieldsForDocumentType,
      }
    ]
  },
  {
    name: 'arbitraryAgreement',
    label: 'Arbitration Agreement',
    fields: [
      {
        componentRef: ArbitrationAgreementPolicyComponent,
        ...commonFieldsForDocumentType,
      }
    ]
  },
  {
    name: 'confidentialityAgreement',
    label: 'Confidentiality Agreement',
    fields: [
      {
        componentRef: ConfidentialityAgreementPolicyComponent,
        ...commonFieldsForDocumentType,
      }
    ]
  },
  {
    name: 'ProhibitedWorkPolicy',
    label: 'Prohibited Work Policy',
    fields: [
      {
        componentRef: ProhibitedWorkPolicyComponent,
        ...commonFieldsForDocumentType,
      }
    ]
  },
  {
    name: 'unsafeWorkPolicy',
    label: 'Unsafe Working Conditions Policy',
    fields: [
      {
        componentRef: UnsafeWorkingConditionsPolicyComponent,
        ...commonFieldsForDocumentType,
      }
    ]
  },
  {
    name: 'wavierOfRight',
    label: 'Waiver of Right to Trial By Jury',
    fields: [
      {
        componentRef: WaiverOfRightToTrialByJuryPolicyComponent,
        ...commonFieldsForDocumentType,
      }
    ]
  },
  {
    name: 'WelcomeToPPSCompanyPoliciesAndProcedures',
    label: 'Welcome To PPS Company Policies And Procedures',
    fields: [
      {
        componentRef: WelcomeToPPSCompanyPoliciesAndProceduresComponent,
        ...commonFieldsForDocumentType,
        controlLabels: {
          buttons: {
            agree: 'Let\'s Sign Contract',
            disagree: 'I disagree',
          }
        }
      }
    ]
  },
  {
    name: 'yourSignature',
    label: 'Your Signature',
    fields: [
      {
        id: 'yourSig-signature',
        name: 'signature64',
        type: 'signature',
        label: 'Signature',
        isFullWidthField: true,
        controlLabels: {
          buttons: {
            reset: 'Clear',
            submit: 'Let\'s sign',
          },
        },
        required: true
      },
      {
        id: 'yourSig-done',
        name: 'formSubmit',
        type: 'submit',
        isFullWidthField: true,
        label: 'Submit'
      }
    ]
  },
];
