// node modules
import React from 'react';
import { useTranslation } from 'react-i18next';

// material components
import TextField from '@material-ui/core/TextField';
import LockIcon from '@material-ui/icons/LockOutlined';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
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
        placeholder={t('auth:email_label')}
        classes={{ root: textField }}
        variant="outlined"
      />
      <TextField
        placeholder={t('auth:password_label')}
        classes={{ root: textField }}
        variant="outlined"
      />
      <Link classes={{ root: forgottenPass }}>
        {t('auth:forgotten_password_label')}
      </Link>
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
