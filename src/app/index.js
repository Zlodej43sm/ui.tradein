// node modules
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// local files
import routes from "../router";

const App = () =>
    <BrowserRouter>
        <Switch>
            {routes.map((props, i) =>
                <Route {...props} key={i} />
            )}
        </Switch>
    </BrowserRouter>

export default App;