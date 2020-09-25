// node modules
import React from 'react';
import { useTranslation } from 'react-i18next';

// material components
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// local components
import LockIcon from '../../components/lock_icon';
import Input from '../../components/input';

// local files
import styles from './styles';

const ConfirmPassword = ({
  classes: { textField, signInButton, title, wrapper }
}) => {
  const { t } = useTranslation();
  return (
    <div className={wrapper}>
      <LockIcon />
      <div className={title}>{t('Password confirmation')}</div>
      <Input
        validationType="password"
        className={textField}
        placeholder={t('Password')}
      />
      <Input
        validationType="password"
        className={textField}
        placeholder={t('Repeat password')}
      />
      <Button
        classes={{ root: signInButton }}
        variant="contained"
        color="primary"
      >
        {t('Confirm')}
      </Button>
    </div>
  );
};

export default withStyles(styles)(ConfirmPassword);
