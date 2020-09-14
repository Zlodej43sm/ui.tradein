// node modules
import React from 'react';
import { useTranslation } from 'react-i18next';

// material components
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// local components
import LockIcon from '../../common/components/lock_icon';

// local files
import styles from './styles';

const ConfirmPassword = ({
  classes: { textField, signInButton, title, wrapper }
}) => {
  const { t } = useTranslation();
  return (
    <div className={wrapper}>
      <LockIcon />
      <div className={title}>{t('confirm_password:Password confirmation')}</div>
      <TextField
        placeholder={t('common:Password')}
        classes={{ root: textField }}
        variant="outlined"
      />
      <TextField
        placeholder={t('confirm_password:Repeat password')}
        classes={{ root: textField }}
        variant="outlined"
      />
      <Button
        classes={{ root: signInButton }}
        variant="contained"
        color="primary"
      >
        {t('confirm_password:Confirm')}
      </Button>
    </div>
  );
};

export default withStyles(styles)(ConfirmPassword);
