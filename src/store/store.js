// node modules
import { configureStore } from '@reduxjs/toolkit';

// local files
import { loader } from './reducers/loader';
import { userInfo } from './reducers/userInfo';

export default configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer: {
    loader,
    userInfo
  }
});
