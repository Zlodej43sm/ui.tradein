// node modules
import React from 'react';
import { useTranslation } from 'react-i18next';

// material components
import RotateLeftOutlinedIcon from '@material-ui/icons/RotateLeftOutlined';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

// local components
import styles from './styles';

const RecoverPassword = ({
  classes: { iconWrapper, icon, title, textField, signInButton, wrapper }
}) => {
  const { t } = useTranslation();
  return (
    <div className={wrapper}>
      <div className={iconWrapper}>
        <RotateLeftOutlinedIcon className={icon} />
      </div>
      <div className={title}>
        {t(
          'Forgot your password? Enter your email to receive a link to reset your password.'
        )}
      </div>
      <TextField
        placeholder={t('Email')}
        classes={{ root: textField }}
        variant="outlined"
      />
      <Button
        classes={{ root: signInButton }}
        variant="contained"
        color="primary"
      >
        {t('Reset password')}
      </Button>
    </div>
  );
};

export default withStyles(styles)(RecoverPassword);
