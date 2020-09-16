// node modules
import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

// material components
import { withStyles } from '@material-ui/core/styles';

// local components
import PrivateComponent from './private_component';
import Header from '../header';
import SideBar from '../side_bar';

// local files
import styles from './styles';

const propTypes = { routes: PropTypes.array };

const PrivateLayout = ({ routes, classes: { privatePage } }) => (
  <div className={privatePage}>
    <Header />
    <SideBar />
    {routes.map(({ exact, component, path }, i) => (
      <Route
        render={(props) => <PrivateComponent {...{ component, ...props }} />}
        {...{ exact, path }}
        key={i}
      />
    ))}
  </div>
);

PrivateLayout.propTypes = propTypes;

export default withStyles(styles)(PrivateLayout);
