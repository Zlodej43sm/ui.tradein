// node modules
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// local components
import PrivateLayout from './private_layout';
import PublicLayout from './public_layout';

// local files
import { publicRoutes, privateRoutes } from '../../router';

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
    </Switch>
  </BrowserRouter>
);

export default App;
