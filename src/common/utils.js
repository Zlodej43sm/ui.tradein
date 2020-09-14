import { languages } from './config';

export const getLanguage = () => {
  const storageLanguage = localStorage.getItem('lang_key');
  const browserLanguage = navigator.language.split('-')[0];
  const language = storageLanguage || browserLanguage;

  return languages[language] ? languages[language].value : 'en';
};
