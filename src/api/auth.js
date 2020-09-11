export const logOut = () => {
  const JWT = localStorage.getItem('JWT_TOKEN');

  if (JWT) localStorage.removeItem('JWT_TOKEN');

  window.location.pathname = '/auth';
};
