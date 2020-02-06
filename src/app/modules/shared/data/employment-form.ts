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
  ProhibitedWorkPolicyComponent,
  W4FormComponent,
  AmerigasFormComponent,
  SafetyDisciplinePolicyComponent,
  AuthorizationToReleaseWorkHistoryComponent,
  WorkWellComponent,
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
  isFullRowField: true,
  isFullColumnField: true,
  isPanEnabled: false,
  controlLabels: {
    buttons: {
      agree: 'I agree, Next',
      disagree: 'I disagree',
    }
  }
};
const phoneMask = '(000)000-0000';
const maxDate = moment().add(50, 'years').endOf('year').toDate();
const patternForAlphabetsOnly = /^[a-zA-Z|\s]+$/;

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
        isFullRowField: false,
        isFullColumnField: true,
        isMasked: true,
        mask: '000-00-0000',
        disabled: true,
        required: false,
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
        isFullRowField: false,
        isFullColumnField: true,
        isUppercase: true,
        mask: null,
        required: true,
        minLength: textTypeDefaultMinLength,
        maxLength: 50,
        pattern: patternForAlphabetsOnly,
        errorMessage: {
          pattern: 'Should have alphabets only'
        },
      },
      {
        id: 'bi-middleInitial',
        name: 'middleName',
        label: 'Middle Initial',
        type: 'text',
        defaultValue: '',
        isMasked: false,
        isFullRowField: false,
        isFullColumnField: true,
        isUppercase: true,
        disabled: false,
        mask: null,
        required: false,
        minLength: 0,
        maxLength: 1,
        pattern: patternForAlphabetsOnly,
        errorMessage: {
          pattern: 'Should have alphabets only'
        },
      },
      {
        id: 'bi-lastName',
        name: 'lastName',
        label: 'Last Name',
        type: 'text',
        defaultValue: '',
        isMasked: false,
        isFullRowField: false,
        isFullColumnField: true,
        isUppercase: true,
        mask: null,
        required: true,
        minLength: textTypeDefaultMinLength,
        maxLength: 50,
        pattern: patternForAlphabetsOnly,
        errorMessage: {
          pattern: 'Should have alphabets only'
        },
      },
      {
        id: 'bi-otherName',
        name: 'otherName',
        label: 'Other Name',
        type: 'text',
        isFullRowField: false,
        isFullColumnField: true,
        defaultValue: '',
        isMasked: false,
        mask: null,
        required: false,
        minLength: textTypeDefaultMinLength,
        maxLength: 50,
        isUppercase: true,
        pattern: patternForAlphabetsOnly,
        errorMessage: {
          pattern: 'Should have alphabets only'
        },
      },
      {
        id: 'bi-dateOfBirth',
        name: 'birthDate',
        label: 'DOB',
        isFullRowField: false,
        isFullColumnField: true,
        type: 'date',
        disabled: false,
        defaultValue: '',
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
        isFullRowField: true,
        isFullColumnField: true,
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
        isFullRowField: false,
        isFullColumnField: true,
        isMasked: false,
        disabled: false,
        required: true,
        mask: null,
        minLength: textTypeDefaultMinLength,
        maxLength: 10,
      },
      {
        id: 'add-streetName',
        name: 'address',
        label: 'Street Name',
        type: 'text',
        defaultValue: '',
        isMasked: false,
        isFullRowField: false,
        isFullColumnField: true,
        disabled: false,
        required: true,
        mask: null,
        minLength: textTypeDefaultMinLength,
        maxLength: 50,
      },
      {
        id: 'add-apartmentNumber',
        name: 'aptno',
        label: 'Apartment Number',
        type: 'text',
        defaultValue: '',
        isMasked: false,
        isFullRowField: false,
        isFullColumnField: true,
        disabled: false,
        required: false,
        mask: null,
        minLength: textTypeDefaultMinLength,
        maxLength: 5,
      },
      {
        id: 'add-city',
        name: 'city',
        label: 'City',
        type: 'text',
        defaultValue: '',
        isFullRowField: false,
        isFullColumnField: true,
        isMasked: false,
        disabled: false,
        required: true,
        mask: null,
        minLength: textTypeDefaultMinLength,
        maxLength: textTypeDefaultMaxLength,
        pattern: patternForAlphabetsOnly,
        errorMessage: {
          pattern: 'Should have alphabets only'
        },
      },
      {
        id: 'add-state',
        name: 'state',
        label: 'State',
        type: 'dropdown',
        isFullRowField: false,
        isFullColumnField: true,
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
        isFullRowField: false,
        isFullColumnField: true,
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
        isFullRowField: false,
        isFullColumnField: true,
        type: 'text',
        defaultValue: '',
        isMasked: true,
        disabled: false,
        required: false,
        mask: phoneMask,
        minLength: textTypeDefaultMinLength,
        maxLength: 17,
      },
      {
        id: 'pe-mobilePhone',
        name: 'altPhone',
        label: 'Mobile Phone',
        isFullRowField: false,
        isFullColumnField: true,
        type: 'text',
        defaultValue: '',
        isMasked: true,
        disabled: false,
        required: false,
        mask: phoneMask,
        minLength: textTypeDefaultMinLength,
        maxLength: 17,
      },
      {
        id: 'pe-email',
        name: 'email',
        label: 'Email',
        type: 'text',
        isFullRowField: false,
        isFullColumnField: true,
        defaultValue: '',
        isMasked: false,
        pattern: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,63}$/,
        errorMessage: {
          pattern: 'Invalid Email'
        },
        isEmail: true,
        disabled: false,
        required: false,
        mask: null,
        minLength: textTypeDefaultMinLength,
        maxLength: 50,
      },
    ]
  },
  {
    name: 'paymentOptions',
    label: 'Payment Options',
    fields: [
      {
        id: 'payOpt-howToPay',
        name: 'paymentMethod',
        label: 'How would you like to receive your Pay',
        type: 'radioButton',
        isFullRowField: true,
        options: [
          {
            label: 'Paper Check',
            value: 'C'
          },
          {
            label: 'Global Cash Card',
            value: 'G'
          },
          {
            label: 'Direct Deposit',
            value: 'D'
          },
        ],
        changeActions: {
          C: [
            {
              action: 'disable',
              fields: ['bankName', 'bankRouting', 'bankAccount']
            }
          ],
          G: [
            {
              action: 'disable',
              fields: ['bankName', 'bankRouting', 'bankAccount']
            }
          ],
          D: [
            {
              action: 'enable',
              fields: ['bankName', 'bankRouting', 'bankAccount']
            },
            {
              action: 'directDepositPopup',
              textToShow: 'Direct deposit may not be available for all locations.',
              buttons: [
                {
                  name: 'ok',
                  label: 'OK'
                }
              ]
            }
          ],
        },
        defaultValue: 'C',
        isMasked: false,
        disabled: false,
        mask: null,
        required: true,
        minLength: null,
        maxLength: null,
      },
      {
        id: 'payOpt-bankName',
        name: 'bankName',
        label: 'Bank Name',
        type: 'text',
        isFullRowField: true,
        isFullColumnField: false,
        defaultValue: '',
        isMasked: false,
        disabled: true,
        required: true,
        mask: null,
        minLength: textTypeDefaultMinLength,
        maxLength: 50,
      },
      {
        id: 'payOpt-bankRouting',
        name: 'bankRouting',
        label: 'Routing No',
        type: 'text',
        isFullRowField: true,
        isFullColumnField: false,
        defaultValue: '',
        isMasked: true,
        disabled: true,
        required: true,
        mask: '000000000',
        pattern: /^[0-9]{9}/,
        minLength: 9,
        maxLength: 10,
        errorMessage: {
          pattern: 'Should be 9 digit number'
        },
      },
      {
        id: 'payOpt-bankAccount',
        name: 'bankAccount',
        label: 'Bank Account',
        type: 'text',
        isFullRowField: true,
        isFullColumnField: false,
        defaultValue: '',
        isMasked: false,
        disabled: true,
        required: true,
        mask: null,
        minLength: textTypeDefaultMinLength,
        maxLength: 20,
      },
    ],
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
        isFullRowField: false,
        isFullColumnField: true,
        defaultValue: '',
        isMasked: false,
        disabled: false,
        mask: null,
        minLength: textTypeDefaultMinLength,
        maxLength: textTypeDefaultMaxLength,
        pattern: patternForAlphabetsOnly,
        errorMessage: {
          pattern: 'Should have alphabets only'
        },
      },
      {
        id: 'ec-lastName',
        name: 'contactLast',
        label: 'Last Name',
        type: 'text',
        isFullRowField: false,
        isFullColumnField: true,
        defaultValue: '',
        isMasked: false,
        mask: null,
        required: false,
        minLength: textTypeDefaultMinLength,
        maxLength: textTypeDefaultMaxLength,
        pattern: patternForAlphabetsOnly,
        errorMessage: {
          pattern: 'Should have alphabets only'
        },
      },
      {
        id: 'ec-homePhone',
        name: 'contactHome',
        label: 'Home Phone',
        type: 'text',
        isFullRowField: false,
        isFullColumnField: true,
        defaultValue: '',
        isMasked: true,
        disabled: false,
        required: false,
        mask: phoneMask,
        minLength: textTypeDefaultMinLength,
        maxLength: 17,
      },
      {
        id: 'ec-mobilePhone',
        name: 'contactMobile',
        label: 'Mobile Phone',
        type: 'text',
        isFullRowField: false,
        isFullColumnField: true,
        defaultValue: '',
        isMasked: true,
        disabled: false,
        required: false,
        mask: phoneMask,
        minLength: textTypeDefaultMinLength,
        maxLength: 17,
      },
      {
        id: 'ec-relationship',
        name: 'contactRelationship',
        label: 'Relationship',
        type: 'text',
        defaultValue: '',
        isFullRowField: false,
        isFullColumnField: true,
        isMasked: false,
        disabled: false,
        mask: null,
        required: false,
        minLength: textTypeDefaultMinLength,
        maxLength: textTypeDefaultMaxLength,
        pattern: patternForAlphabetsOnly,
        errorMessage: {
          pattern: 'Should have alphabets only'
        },
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
        isFullRowField: true,
        isFullColumnField: true,
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
        isFullRowField: false,
        isFullColumnField: true,
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
        isFullRowField: false,
        isFullColumnField: true,
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
        isFullRowField: false,
        isFullColumnField: true,
        isMasked: false,
        disabled: false,
        mask: null,
        required: false,
        minValue: new Date(),
        maxValue: maxDate,
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
        isFullRowField: true,
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
            label: 'An alien authorized to work',
            value: 7
          },
        ],
        changeActions: {
          4: [
            {
              action: 'disable',
              fields: [
                'lPRAlienNumber',
                'alienExpirationDate',
                'alienNumber',
                'i94Number',
                'foreignPassportNumber',
                'countryOfIssuance'
              ]
            }
          ],
          5: [
            {
              action: 'disable',
              fields: [
                'lPRAlienNumber',
                'alienExpirationDate',
                'alienNumber',
                'i94Number',
                'foreignPassportNumber',
                'countryOfIssuance'
              ]
            }
          ],
          6: [
            {
              action: 'enable',
              fields: ['lPRAlienNumber']
            },
            {
              action: 'disable',
              fields: [
                'alienExpirationDate',
                'alienNumber',
                'i94Number',
                'foreignPassportNumber',
                'countryOfIssuance'
              ],
            },
          ],
          7: [
            {
              action: 'disable',
              fields: ['lPRAlienNumber']
            },
            {
              action: 'enable',
              fields: [
                'alienExpirationDate',
                'alienNumber',
                'i94Number',
                'foreignPassportNumber',
                'countryOfIssuance'
              ],
            },
          ],
        },
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
        label: 'Alien Registration Number/USCIS #',
        isFullRowField: false,
        isFullColumnField: true,
        type: 'text',
        defaultValue: '',
        isMasked: false,
        disabled: true,
        required: false,
        mask: null,
        maxLength: 9,
        minLength: textTypeDefaultMinLength,
      },
      {
        id: 'citizen-expireDate',
        name: 'alienExpirationDate',
        label: 'Until Expiration (if applicable)',
        type: 'date',
        isFullColumnField: false,
        isFullRowField: true,
        defaultValue: '',
        isMasked: false,
        disabled: true,
        mask: null,
        required: false,
        minLength: null,
        maxLength: null,
        minValue: new Date(),
        maxValue: maxDate,
      },
      {
        id: 'citizen-alienNumber',
        name: 'alienNumber',
        label: 'Alien Registration Number/USCIS #',
        bottomText: 'OR',
        showFieldNumber: '1.',
        type: 'text',
        isFullRowField: true,
        isFullColumnField: false,
        defaultValue: '',
        isMasked: false,
        disabled: true,
        required: false,
        mask: null,
        minLength: textTypeDefaultMinLength,
        maxLength: 9,
      },
      {
        id: 'citizen-i94Number',
        name: 'i94Number',
        label: 'Form I-94 Admission Number',
        showFieldNumber: '2.',
        type: 'text',
        bottomText: 'OR',
        isFullRowField: true,
        isFullColumnField: false,
        defaultValue: '',
        isMasked: false,
        disabled: true,
        required: false,
        mask: null,
        minLength: textTypeDefaultMinLength,
        maxLength: 11,
      },
      {
        id: 'citizen-foreignPassportNumber',
        name: 'foreignPassportNumber',
        label: 'Foreign Passport Number',
        showFieldNumber: '3.',
        type: 'text',
        isFullRowField: true,
        isFullColumnField: false,
        defaultValue: '',
        isMasked: false,
        disabled: true,
        required: false,
        mask: null,
        minLength: textTypeDefaultMinLength,
        maxLength: 12,
      },
      {
        id: 'citizen-countryOfIssuance',
        name: 'countryOfIssuance',
        label: 'Country Of Issuance',
        type: 'dropdown',
        showFieldNumber: ' ',
        options: Countries,
        isFullRowField: true,
        isFullColumnField: false,
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
        isFullRowField: true,
        isFullColumnField: true,
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
            isFullRowField: false,
            isFullColumnField: true,
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
            isFullRowField: false,
            isFullColumnField: true,
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
            isFullRowField: false,
            isFullColumnField: true,
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
        isFullRowField: true,
        isFullColumnField: true,
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
        isFullRowField: true,
        isFullColumnField: true,
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
            isFullRowField: false,
            isFullColumnField: true,
            isUppercase: true,
            disabled: false,
            required: true,
            mask: null,
            minLength: textTypeDefaultMinLength,
            maxLength: 50,
          },
          {
            id: 'wh-history-startDate',
            name: 'startDate',
            label: 'Start Date',
            type: 'date',
            disabled: false,
            defaultValue: '',
            isFullRowField: false,
            isFullColumnField: true,
            isMasked: true,
            isStartDate: true,
            mask: 'd0/M0/0000',
            required: false,
            minValue: moment().subtract(80, 'years').startOf('year').toDate(),
            maxValue: new Date(),
          },
          {
            id: 'wh-history-endDate',
            name: 'endDate',
            label: 'End Date',
            type: 'date',
            disabled: false,
            isFullRowField: false,
            isFullColumnField: true,
            isEndDate: true,
            defaultValue: '',
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
            isFullRowField: false,
            isFullColumnField: true,
            disabled: false,
            required: false,
            mask: null,
            minLength: textTypeDefaultMinLength,
            maxLength: 50,
          },
          {
            id: 'wh-history-phone',
            name: 'phone',
            label: 'Phone',
            type: 'text',
            defaultValue: '',
            isMasked: true,
            isFullRowField: false,
            isFullColumnField: true,
            disabled: false,
            required: false,
            mask: phoneMask,
            minLength: textTypeDefaultMinLength,
            maxLength: 17,
          },
          {
            id: 'wh-history-payRate',
            name: 'payRate',
            label: 'Pay Rate',
            type: 'number',
            defaultValue: '',
            isMasked: false,
            disabled: false,
            isFullRowField: false,
            isFullColumnField: true,
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
            isFullRowField: false,
            isFullColumnField: true,
            disabled: false,
            required: false,
            mask: null,
            minLength: textTypeDefaultMinLength,
            maxLength: 50,
          },
          {
            id: 'wh-history-reasonLeaving',
            name: 'reasonForLeaving',
            label: 'Reason Leaving',
            isFullRowField: false,
            isFullColumnField: true,
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
        isFullRowField: false,
        isFullColumnField: true,
        defaultValue: '',
        isMasked: false,
        mask: null,
        required: false,
        minLength: textTypeDefaultMinLength,
        maxLength: 1000,
      },
      {
        id: 'ad-done',
        name: 'formSubmit',
        type: 'submit',
        isFullRowField: true,
        isFullColumnField: true,
        label: 'Continue to W4 Form'
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
        isFullRowField: false,
        isFullColumnField: true,
        required: false,
        valueAccessor: 'basicInformation.firstName',
      },
      {
        id: 'ftv-lastName',
        label: 'Last Name',
        type: 'displayValue',
        required: false,
        isFullRowField: false,
        isFullColumnField: true,
        valueAccessor: 'basicInformation.lastName',
      },
      {
        id: 'ftv-ssn',
        label: 'SSN',
        type: 'displayValue',
        required: false,
        isFullRowField: false,
        isFullColumnField: true,
        valueAccessor: 'basicInformation.socialSecurityNo',
      },
      {
        id: 'ftv-dateOfBirth',
        label: 'DOB',
        type: 'displayValue',
        isDate: true,
        required: false,
        isFullRowField: false,
        isFullColumnField: true,
        valueAccessor: 'basicInformation.birthDate',
      },
      {
        id: 'ftv-address',
        label: 'Address',
        type: 'displayValue',
        required: false,
        isFullRowField: false,
        isFullColumnField: true,
        valueAccessor: 'address.address',
      },
      {
        id: 'ftv-phone',
        label: 'Phone Number',
        type: 'displayValue',
        required: false,
        isFullRowField: false,
        isFullColumnField: true,
        valueAccessor: 'phoneAndEmail.phone',
      },
      {
        id: 'ftv-email',
        label: 'Email',
        type: 'displayValue',
        required: false,
        isFullRowField: false,
        isFullColumnField: true,
        valueAccessor: 'phoneAndEmail.email',
      },
      {
        id: 'ftv-verificationControls',
        type: 'verificationControls',
        name: 'contractAgree',
        required: true,
        isFullRowField: true,
        isFullColumnField: true,
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
    label: 'USCIS Form I-9',
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
        name: 'medicalAuthorization',
        defaultValue: false,
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
    label: 'Welcome To {{shortCode}} Company Policies And Procedures',
    fields: [
      {
        componentRef: WelcomeToPPSCompanyPoliciesAndProceduresComponent,
        ...commonFieldsForDocumentType,
      }
    ]
  },
  {
    name: 'authToWorkHistory',
    label: 'Authorization To Release Work History',
    fields: [
      {
        componentRef: AuthorizationToReleaseWorkHistoryComponent,
        ...commonFieldsForDocumentType,
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
        isFullRowField: true,
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
        isFullRowField: true,
        label: 'Submit'
      }
    ]
  },
];
export const EmploymentFormForAmerigasCode: Array<any>  = [
  {
    name: 'amerigasForm',
    label: 'Amerigas Propane Exchange',
    fields: [
      {
        componentRef: AmerigasFormComponent,
        ...commonFieldsForDocumentType,
      }
    ]
  },
  {
    name: 'safetyDiscipline',
    label: 'Safety Discipline Policy',
    fields: [
      {
        componentRef: SafetyDisciplinePolicyComponent,
        ...commonFieldsForDocumentType,
      }
    ]
  },
];
export const EmploymentFormForWorkWell: Array<any> = [
  {
    name: 'workWell',
    label: 'Work Well Policy',
    fields: [
      {
        componentRef: WorkWellComponent,
        ...commonFieldsForDocumentType,
      }
    ]
  },
];
