// node modules
import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

// local components
import PublicComponent from './public_component';
import Wrapper from './wrapper';

const propTypes = { routes: PropTypes.array };

const PublicLayout = ({ routes }) => (
  <Wrapper>
    {routes.map(({ exact, component, path }, i) => (
      <Route
        render={(props) => <PublicComponent {...{ component, ...props }} />}
        {...{ exact, path }}
        key={i}
      />
    ))}
  </Wrapper>
);

PublicLayout.propTypes = propTypes;

export default PublicLayout;
