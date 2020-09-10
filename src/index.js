// node modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// local components
import App from './app';

// local files
import store from './store/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
