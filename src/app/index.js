// node modules
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// local components
import AuthComponent from './auth_component';
import RouteComponent from './route_component';

// local files
import { authRoutes, routes } from '../router';

const App = () => (
  <BrowserRouter>
    <Switch>
      {routes.map(({ exact, component, path }, i) => (
        <Route
          render={(props) => <RouteComponent {...{ component, ...props }} />}
          {...{ exact, path }}
          key={i}
        />
      ))}
      {authRoutes.map(({ exact, component, path }, i) => (
        <Route
          render={(props) => <AuthComponent {...{ component, ...props }} />}
          {...{ exact, path }}
          key={i}
        />
      ))}
    </Switch>
  </BrowserRouter>
);

export default App;
