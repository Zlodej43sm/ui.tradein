// node modules
import React from 'react';
import { Redirect } from 'react-router-dom';

const AuthComponent = ({ component: Component, ...props }) =>
  localStorage.getItem('JWT_TOKEN') ? (
    <Component {...props} />
  ) : (
    <Redirect to="/auth" />
  );

export default AuthComponent;