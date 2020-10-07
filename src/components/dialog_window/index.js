// node modules
import React from 'react';

// material components
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';

// local files
import styles from './styles';

const DialogWindow = ({
  classes: { dialogWindow, appBar, title: styleTitle },
  children,
  ...rest
}) => {
  const { title, fullScreen, open, handleClose, dialogButtons } = rest;

  return (
    <div className={dialogWindow}>
      <Dialog {...{ fullScreen, open, onClose: handleClose }}>
        <AppBar className={appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={styleTitle}>
              {title}
            </Typography>
            {dialogButtons.map(dialogButton => dialogButton)}
          </Toolbar>
        </AppBar>
        <DialogContent>{children}</DialogContent>
      </Dialog>
    </div>
  );
};

export default withStyles(styles)(DialogWindow);
