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
        {t('recover_password:recover_password_title')}
      </div>
      <TextField
        placeholder={t('common:email_label')}
        classes={{ root: textField }}
        variant="outlined"
      />
      <Button
        classes={{ root: signInButton }}
        variant="contained"
        color="primary"
      >
        {t('recover_password:reset_password')}
      </Button>
    </div>
  );
};

export default withStyles(styles)(RecoverPassword);
