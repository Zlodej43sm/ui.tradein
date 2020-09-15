// node modules
import { createReducer } from '@reduxjs/toolkit';

// local files
import { SET_LOADER, DISABLE_LOADER, UPDATE_LOADER } from '../types';

export const loader = createReducer(
  {
    active: false,
    message: [],
    type: null
  },
  {
    [SET_LOADER]: (state, { payload: { type, message } }) => ({
      ...state,
      type,
      message: [...state.message, { message, key: new Date().getTime() }],
      active: true
    }),
    [DISABLE_LOADER]: () => ({
      active: false,
      type: null,
      message: []
    }),
    [UPDATE_LOADER]: (state) => ({
      ...state,
      message: state.message.slice(1)
    })
  }
);
