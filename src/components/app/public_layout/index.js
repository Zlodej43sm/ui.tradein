// node modules
import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

// local components
import PublicComponent from './public_component';

const propTypes = { routes: PropTypes.array };

const PublicLayout = ({ routes }) => (
  <div className="public">
    {routes.map(({ exact, component, path }, i) => (
      <Route
        render={(props) => <PublicComponent {...{ component, ...props }} />}
        {...{ exact, path }}
        key={i}
      />
    ))}
  </div>
);

PublicLayout.propTypes = propTypes;

export default PublicLayout;
