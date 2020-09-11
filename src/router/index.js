// node modules
import React from 'react';

// local components
import Homepage from '../pages/home_page';

const routes = [
  {
    path: '/',
    component: (props) => <Homepage {...props} />,
    exact: true
  }
];

export default routes;
