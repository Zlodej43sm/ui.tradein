// node modules
import { configureStore } from '@reduxjs/toolkit';

// local files
import { app } from './reducers';
import { loader } from './reducers/loader';

export default configureStore({
  reducer: {
    app,
    loader
  }
});
