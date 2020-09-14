// node modules
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

// local files
import { getLanguage } from '../common/utils';
import ru from './ru';
import en from './en';
import uk from './uk';

const lng = getLanguage();

// init options https://www.i18next.com/overview/configuration-options;
i18next.use(initReactI18next).init({
  react: { wait: true },
  resources: { ru, en, uk },
  lng,
  fallbackLng: lng,
  keySeparator: false,
  nsSeparator: false,
  interpolation: { escapeValue: false },
  fallbackNS: []
});

export default i18next;
