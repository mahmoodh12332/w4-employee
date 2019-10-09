export const COOKIE_ENCRPT_SECRET = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="'{}:,-`;
export const DATE_FORMAT = 'MM/DD/YYYY';
export const FORM_COOKIE_NAME = '__fv';
export const CURRENT_SSN_COOKIE_NAME = '__cs';
export const SITE_INFO_COOKIE_NAME = '__si';
export const API_BASE = 'https://ppsapplicationtest.azurewebsites.net/api/mobil';
export const API_KEY = 'somelongrandomkey';
export const API_KEY_HEADER = 'X-ApiKey';
export const EmploymentSkillsYearMap = {
  'Less than a Year': {
    label: 'Less than a Year',
    value: 'Less than a Year',
    id: 1,
  },
  '1 to 3 Years': {
    label: '1 to 3 Years',
    value: '1 to 3 Years',
    id: 2,
  },
  '3 to 5 Years': {
    label: '3 to 5 Years',
    value: '3 to 5 Years',
    id: 3,
  },
  '5 Years or more': {
    label: '5 Years or more',
    value: '5 Years or more',
    id: 4,
  }
};
export const API_ROUTES = {
  getAccessCode: `${API_BASE}/webcode`,
  saveApplication: `${API_BASE}/application`,
  skills: `${API_BASE}/skills`,
};
export default {
  API_BASE,
  API_KEY,
  API_KEY_HEADER,
  API_ROUTES,
  DATE_FORMAT,
  FORM_COOKIE_NAME,
  COOKIE_ENCRPT_SECRET,
};
