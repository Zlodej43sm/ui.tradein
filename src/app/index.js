// node modules
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// local components
import RouteComponent from './route_component';

// local files
import routes, { authRoute } from '../router';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route {...authRoute} />
      {routes.map(({ exact, component, path }, i) => (
        <Route
          render={(props) => <RouteComponent {...{ component, ...props }} />}
          {...{ exact, path }}
          key={i}
        />
      ))}
    </Switch>
  </BrowserRouter>
);

export default App;
