// node modules
import React from 'react';

// components with required authorization
import Homepage from '../pages/home_page';

// components without required authorization
import Auth from '../pages/auth';
import RecoverPassword from '../pages/recover_password';
import ConfirmPassword from '../pages/confirm_password';

export const authRoutes = [
  {
    path: '/',
    component: (props) => <Homepage {...props} />,
    exact: true
  }
];

export const routes = [
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
