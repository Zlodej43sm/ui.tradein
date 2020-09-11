import { logOut } from './auth';

const baseURLs = {
  development: 'http://localhost:3000',
  production: ''
};

const customFetch = (url, auth = true, method = 'GET', body) => {
  const JWT_TOKEN = localStorage.getItem('JWT_TOKEN');
  const headers = {
    'Content-Type': 'application/json',
    // set JWT to header if request needs auth header and user authorized
    ...(auth && JWT_TOKEN ? { Authorization: `Bearer ${JWT_TOKEN}` } : {})
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
    .then((result) => result.json())
    .then((result) => result)
    .catch((result) => {
      if (result.status !== 401) return result;

      // logout and redirect to auth page
      // if user get unauthorized status
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
