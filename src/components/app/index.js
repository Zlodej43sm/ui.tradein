// node modules
import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// local components
import PrivateLayout from './private_layout';
import PublicLayout from './public_layout';
import InfoBar from '../snackbar';

// local files
import { publicRoutes, privateRoutes, notFoundRoute } from 'router';

const privatePaths = privateRoutes.map(({ path }) => path);
const publicPaths = publicRoutes.map(({ path }) => path);

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={privatePaths}>
        <PrivateLayout routes={privateRoutes} />
      </Route>
      <Route exact path={publicPaths}>
        <PublicLayout routes={publicRoutes} />
      </Route>
      <Route {...notFoundRoute} />
      <Redirect to={notFoundRoute.path} />
    </Switch>
    <InfoBar />
  </BrowserRouter>
);

export default App;
