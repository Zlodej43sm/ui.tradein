// node modules
import React from 'react';

// local components
import PublicWrapper from '../../components/app/public_layout/wrapper';
import PrivateWrapper from '../../components/app/private_layout/wrapper';
import Content from './content';

// local files
import { getJWT } from '../../common/utils';

const NotFound = () => {
  const isAuth = getJWT();
  return isAuth ? (
    <PrivateWrapper>
      <Content auth />
    </PrivateWrapper>
  ) : (
    <PublicWrapper>
      <Content />
    </PublicWrapper>
  );
};

export default NotFound;
