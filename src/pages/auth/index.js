// node modules
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

// material components
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import LinkMui from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';

// local component
import LockIcon from '../../common/components/lock_icon';

// local files
import styles from './styles';

const Auth = ({
  classes: { wrapper, textField, title, signInButton, forgottenPass }
}) => {
  const { t } = useTranslation();

  return (
    <div className={wrapper}>
      <LockIcon />
      <div className={title}>{t('Authorization')}</div>
      <TextField
        placeholder={t('Email')}
        classes={{ root: textField }}
        variant="outlined"
      />
      <TextField
        placeholder={t('Password')}
        classes={{ root: textField }}
        variant="outlined"
      />
      <LinkMui
        to="/recover_password"
        component={Link}
        classes={{ root: forgottenPass }}
      >
        {t('Forgot your password ?')}
      </LinkMui>
      <Button
        classes={{ root: signInButton }}
        variant="contained"
        color="primary"
      >
        {t('Sign in')}
      </Button>
    </div>
  );
};

export default withStyles(styles)(Auth);
