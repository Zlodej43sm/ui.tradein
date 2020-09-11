// node modules
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

// material components
import TextField from '@material-ui/core/TextField';
import LockIcon from '@material-ui/icons/LockOutlined';
import Button from '@material-ui/core/Button';
import LinkMui from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';

// local files
import styles from './styles';

const Auth = ({
  classes: {
    wrapper,
    iconWrapper,
    icon,
    textField,
    title,
    signInButton,
    forgottenPass
  }
}) => {
  const { t } = useTranslation();

  return (
    <div className={wrapper}>
      <div className={iconWrapper}>
        <LockIcon className={icon} />
      </div>
      <div className={title}>{t('auth:sign_in_title_label')}</div>
      <TextField
        placeholder={t('common:email_label')}
        classes={{ root: textField }}
        variant="outlined"
      />
      <TextField
        placeholder={t('auth:password_label')}
        classes={{ root: textField }}
        variant="outlined"
      />
      <LinkMui
        to="/recover_password"
        component={Link}
        classes={{ root: forgottenPass }}
      >
        {t('auth:forgotten_password_label')}
      </LinkMui>
      <Button
        classes={{ root: signInButton }}
        variant="contained"
        color="primary"
      >
        {t('auth:sign_in_label')}
      </Button>
    </div>
  );
};

export default withStyles(styles)(Auth);
