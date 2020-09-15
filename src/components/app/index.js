// node modules
import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

// local components
import PrivateLayout from './private_layout';
import PublicLayout from './public_layout';
import InfoBar from '../snackbar';

// local files
import { history } from '../../router/history';
import { publicRoutes, privateRoutes } from '../../router';

const privatePaths = privateRoutes.map(({ path }) => path);
const publicPaths = publicRoutes.map(({ path }) => path);

const App = () => (
  <Router history={history}>
    <Switch>
      <Route exact path={privatePaths}>
        <PrivateLayout routes={privateRoutes} />
      </Route>
      <Route exact path={publicPaths}>
        <PublicLayout routes={publicRoutes} />
      </Route>
    </Switch>
    <InfoBar />
  </Router>
);

export default App;
