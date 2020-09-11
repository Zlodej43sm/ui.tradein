// node modules
import React from 'react';
import { Redirect } from 'react-router-dom';

const RouteComponent = ({ component: Component, ...props }) =>
  localStorage.getItem('JWT_TOKEN') ? (
    <Redirect to="/" />
  ) : (
    <Component {...props} />
  );

export default RouteComponent;
