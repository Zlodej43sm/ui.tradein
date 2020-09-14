export const getLanguage = () => {
  const languages = { ru: 'ru', en: 'en' };
  const storageLanguage = localStorage.getItem('lang_key');
  const browserLanguage = navigator.language.split('-')[0];
  const language = storageLanguage || browserLanguage;

  return languages[language] || 'en';
};
