// node modules
import React from 'react';

// local components
import Homepage from '../pages/home_page';
import Auth from '../pages/auth';

export const authRoute = {
  path: '/auth',
  component: (props) => <Auth {...props} />,
  exact: true
};

export default [
  {
    path: '/',
    component: (props) => <Homepage {...props} />,
    exact: true
  }
];
