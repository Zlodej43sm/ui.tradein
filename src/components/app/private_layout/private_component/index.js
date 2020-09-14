// node modules
import React from 'react';
import { Redirect } from 'react-router-dom';

const PrivateComponent = ({ component: Component, ...props }) =>
  localStorage.getItem('JWT_TOKEN') ? (
    <Component {...props} />
  ) : (
    <Redirect to="/auth" />
  );

export default PrivateComponent;
