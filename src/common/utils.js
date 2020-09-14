import { languages } from './config';

export const getLanguage = () => {
  const storageLanguage = localStorage.getItem('lang_key');
  const browserLanguage = navigator.language.split('-')[0];
  const defaultLanguage = storageLanguage || browserLanguage;
  const currentLanguage = languages[defaultLanguage];

  return currentLanguage ? currentLanguage.value : 'en';
};
