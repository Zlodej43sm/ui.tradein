// node modules
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';

// material components
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

// local files
import { UPDATE_LOADER } from '../../store/types';

const HIDE_DURATION = 5000;
const types = {
  success: 'success',
  loading: 'info',
  error: 'error'
};

const InfoBar = () => {
  const [messageInfo, setMessageInfo] = useState(null);
  const [open, setOpen] = useState(false);
  const { message, type } = useSelector(({ loader }) => loader);
  const dispatch = useDispatch();
  const placementOptions = { vertical: 'top', horizontal: 'center' };
  const { t } = useTranslation();

  useEffect(() => {
    const { length } = message;
    const isOpened = length && messageInfo && open;

    if (length && !messageInfo) {
      setMessageInfo({ ...message[0] });
      dispatch({ type: UPDATE_LOADER });
      setOpen(true);
    }

    if (isOpened) setOpen(false);
  }, [messageInfo, message, open, dispatch]);

  const handleExited = () => setMessageInfo(null);
  const handleClose = () => setOpen(false);

  return (
    <Snackbar
      key={messageInfo && messageInfo.key}
      anchorOrigin={placementOptions}
      autoHideDuration={HIDE_DURATION}
      open={open}
      onExited={handleExited}
      onClose={handleClose}
    >
      <Alert
        onClick={handleClose}
        elevation={6}
        severity={types[type] || 'info'}
      >
        {messageInfo && t(messageInfo.message)}
      </Alert>
    </Snackbar>
  );
};

export default InfoBar;
