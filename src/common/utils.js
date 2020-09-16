import { languages } from './config';

export const getLanguage = () => {
  const storageLanguage = localStorage.getItem('lang_key');
  const browserLanguage = navigator.language.split('-')[0];
  const language = storageLanguage || browserLanguage;
  const preferableLang = languages[language];

  return preferableLang ? preferableLang.value : 'en';
};

export const setUserToLocalStorage = (data) => {
  localStorage.setItem('user', JSON.stringify(data));
};

export const getJWT = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  if (!user) return null;

  return user.accessToken;
};

export const getUserInfo = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  if (!user) return null;

  const { accessToken, ...userInfo } = user;

  return userInfo;
};

const createGenerator = () => {
  let id = 0;

  return () => `uniq_${++id}`;
};

export const getUniqId = createGenerator();
