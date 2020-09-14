// node modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';

// local components
import App from './components/app';

// local files
import i18next from './i18next/config';
import store from './store/store';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <Provider store={store}>
        <App />
      </Provider>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
