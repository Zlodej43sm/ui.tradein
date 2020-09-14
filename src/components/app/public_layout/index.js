// node modules
import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

// material components
import { withStyles } from '@material-ui/core/styles';

// local components
import PublicComponent from './public_component';
import Header from '../header';

// local files
import styles from './styles';

const propTypes = { routes: PropTypes.array };

const PublicLayout = ({ routes, classes: { publicPage } }) => (
  <div className={publicPage}>
    <Header />
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

export default withStyles(styles)(PublicLayout);
