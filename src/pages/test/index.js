// node modules
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

// material components
import Button from '@material-ui/core/Button';

// local component
import DialogWindow from '../../components/dialog_window';

const Test = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const dialogButtons = [
    <Button autoFocus color="inherit" onClick={handleClose}>
      {t('save')}
    </Button>
  ];

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open full-screen dialog
      </Button>
      <DialogWindow
        {...{
          title: t('Test'),
          fullScreen: true,
          open,
          handleClose,
          dialogButtons
        }}
      >
        <div>test content</div>
      </DialogWindow>
    </div>
  );
};

export default Test;
