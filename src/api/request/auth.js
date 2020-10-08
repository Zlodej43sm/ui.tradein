import { request } from './';
import { getJWT } from 'common/utils';

export const logOut = () => {
  const JWT = getJWT();

  if (JWT) localStorage.removeItem('user');

  window.location.pathname = '/auth';
};

export const logIn = request('/v1/auth/signin', 'post', false);
