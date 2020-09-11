// node modules
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

// local files
import en from './en';

// init options https://www.i18next.com/overview/configuration-options;
i18next.use(initReactI18next).init({
  react: { wait: true },
  resources: { en },
  lng: 'en',
  fallbackLng: 'en',
  keySeparator: '.',
  nsSeparator: ':',
  interpolation: { escapeValue: false },
  fallbackNS: []
});

export default i18next;
