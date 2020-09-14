// node modules
import React from 'react';
import { Redirect } from 'react-router-dom';

const PublicComponent = ({ component: Component, ...props }) =>
  localStorage.getItem('JWT_TOKEN') ? (
    <Redirect to="/" />
  ) : (
    <Component {...props} />
  );

export default PublicComponent;
