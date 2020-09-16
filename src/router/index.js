// node modules
import React from 'react';

// private components (auth required)
import Homepage from '../pages/home_page';

// public components (auth isn't required)
import Auth from '../pages/auth';
import RecoverPassword from '../pages/recover_password';
import ConfirmPassword from '../pages/confirm_password';

// other components
import NotFound from '../pages/not_found';

export const privateRoutes = [
  {
    path: '/',
    component: (props) => <Homepage {...props} />,
    exact: true
  }
];

export const publicRoutes = [
  {
    path: '/auth',
    component: (props) => <Auth {...props} />,
    exact: true
  },
  {
    path: '/recover_password',
    component: (props) => <RecoverPassword {...props} />,
    exact: true
  },
  {
    path: '/password_confirmation',
    component: (props) => <ConfirmPassword {...props} />,
    exact: true
  }
];

export const notFoundRoute = {
  path: '/page_not_found',
  component: (props) => <NotFound {...props} />,
  exact: true
};
