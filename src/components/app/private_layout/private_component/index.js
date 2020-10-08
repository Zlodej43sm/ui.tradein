// node modules
import React from 'react';
import { Redirect } from 'react-router-dom';

// local files
import { getJWT } from 'common/utils';

const PrivateComponent = ({ component: Component, ...props }) => {
  const JWT = getJWT();

  return JWT ? <Component {...props} /> : <Redirect to="/auth" />;
};

export default PrivateComponent;
