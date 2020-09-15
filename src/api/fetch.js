import { logOut } from './';
import { successStatusCodes } from '../common/constants';

const baseURLs = {
  development: 'http://localhost:8081',
  production: ''
};

const customFetch = (url, auth = true, method = 'GET', body) => {
  const JWT_TOKEN = localStorage.getItem('JWT_TOKEN');
  const headers = {
    'Content-Type': 'application/json',
    // set JWT to header if request needs auth header and user authorized
    ...(auth && JWT_TOKEN ? { 'x-access-token': JWT_TOKEN } : {})
  };

  // redirect to auth page if authorization is required
  // and user is not authorized
  if (auth && !JWT_TOKEN) {
    logOut();
  }

  const options = {
    headers,
    method,
    ...(body ? { body: JSON.stringify(body) } : {})
  };

  return fetch(`${baseURLs[process.env.NODE_ENV]}${url}`, { ...options })
    .then((result) =>
      result.json().then((data) => ({ data, status: result.status }))
    )
    .then(({ data, status }) => {
      const success = successStatusCodes[status];

      if (success) return { data };

      if (status !== 401 || status !== 403) return Promise.reject(data);

      logOut();
    });
};

// using fetcher
// fetcher.post(url, body)
// fetcher.get(url)
// can be customized for query params and delete, put methods.
export const fetcher = {
  post: (url, body, auth) => customFetch(url, auth, 'POST', body),
  get: (url) => customFetch(url)
};
