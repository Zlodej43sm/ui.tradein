// node modules
import React from 'react';
import { Redirect } from 'react-router-dom';

// local files
import { getJWT } from '../../../../common/utils';

const PublicComponent = ({ component: Component, ...props }) => {
  const JWT = getJWT();

  return JWT ? <Redirect to="/" /> : <Component {...props} />;
};

export default PublicComponent;
