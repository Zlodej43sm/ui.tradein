// node modules
import React from 'react';

// local components
import PublicWrapper from '../../components/app/public_layout/wrapper';
import PrivateWrapper from '../../components/app/private_layout/wrapper';
import Content from './content';

const NotFound = () => {
  const isAuth = localStorage.getItem('JWT_TOKEN');
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
