// node modules
import { createReducer } from '@reduxjs/toolkit';

// local files
import { SET_USER_INFO, REMOVE_USER_INFO } from '../types';

const initialState = {
  email: null,
  id: null,
  roles: [],
  username: null
};

export const userInfo = createReducer(initialState, {
  [SET_USER_INFO]: (state, { payload }) => ({
    ...payload
  }),
  [REMOVE_USER_INFO]: () => initialState
});
