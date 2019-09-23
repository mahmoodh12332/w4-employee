import * as moment from 'moment';
import {States} from './states';
import {Skills} from './skills';
import {Levels} from './level';
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
} from '../../dashboard/components/documents';

const textTypeDefaultMinLength = 0;
const textTypeDefaultMaxLength = 255;
const commonFieldsForDocumentType = {
  name: 'agreed',
  label: '',
  type: 'document',
  required: true,
};

export const EmploymentApplicationForm: Array<any> = [
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
        isMasked: false,
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
        minValue: moment().subtract(100, 'years').toDate(),
        maxValue: moment().subtract(10, 'years').toDate(),
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
      {
        id: 'citizen-uscisNumber',
        name: 'uscisNumber',
        label: 'USCIS #',
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
        id: 'citizen-alienNumber',
        name: 'alienNumber',
        label: 'Alien Number',
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
        id: 'citizen-i94Number',
        name: 'i94Number',
        label: 'I-94 Number',
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
        name: 'expireDate',
        label: 'Exp. Date (if any)',
        type: 'date',
        defaultValue: '',
        isMasked: false,
        disabled: true,
        mask: null,
        required: false,
        minLength: null,
        maxLength: null,
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
        id: 'wh-history',
        name: 'history',
        label: 'History',
        type: 'group',
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
            name: 'companyName',
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
            name: 'reasonLeaving',
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
  },
  {
    name: 'formDone',
    label: 'Done',
    fields: [
      {
        id: 'wh-serviceBaseExp',
        name: 'formSubmit',
        type: 'submit',
        label: 'Submit'
      }
    ]
  }
];
export const EmploymentContractForm: Array<any> = [
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
    name: 'medicalRelease',
    label: 'Medical Release',
    fields: [
      {
        componentRef: MedicalReleasePolicyComponent,
        ...commonFieldsForDocumentType,
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
    name: 'yourSignature',
    label: 'Create Your Signature',
    fields: [
      {
        id: 'yourSig-signature',
        type: 'signature',
        label: '',
        controlLabels: {
          buttons: {
            reset: 'Clear',
            submit: 'Let\'s sign',
          },
        },
        required: true
      }
    ]
  }
];
