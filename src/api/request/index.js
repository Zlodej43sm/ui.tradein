import { fetcher } from '../fetch';
import { SET_LOADER } from '../../store/types';

export const request = (url, method, auth) => ({
  body,
  successCb = () => {},
  errorCb = () => {},
  successMsg,
  loadingMsg
}) => (dispatch) => {
  if (loadingMsg) {
    dispatch({
      type: SET_LOADER,
      payload: { type: 'loading', message: loadingMsg }
    });
  }

  return fetcher[method](url, body, auth)
    .then((result) => {
      if (successMsg) {
        dispatch({
          type: SET_LOADER,
          payload: { type: 'success', message: successMsg }
        });
      }

      successCb(result, dispatch);
    })
    .catch((result) => {
      dispatch({
        type: SET_LOADER,
        payload: { type: 'error', message: result.message }
      });

      errorCb(result, dispatch);
    });
};
