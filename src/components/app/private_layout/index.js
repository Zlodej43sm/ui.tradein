// node modules
import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

// local components
import PrivateComponent from './private_component';
import Wrapper from './wrapper';

const propTypes = { routes: PropTypes.array };

const PrivateLayout = ({ routes }) => (
  <Wrapper>
    {routes.map(({ exact, component, path }, i) => (
      <Route
        render={(props) => <PrivateComponent {...{ component, ...props }} />}
        {...{ exact, path }}
        key={i}
      />
    ))}
  </Wrapper>
);

PrivateLayout.propTypes = propTypes;

export default PrivateLayout;
