// node modules
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import isEmpty from 'lodash/isEmpty';

// material components
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import LinkMui from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';

// local component
import LockIcon from '../../common/components/lock_icon';

// local files
import { SET_USER_INFO, REMOVE_USER_INFO } from '../../store/types';
import { history } from '../../router/history';
import { logIn } from '../../api';
import styles from './styles';

const Auth = ({
  classes: { wrapper, textField, title, signInButton, forgottenPass }
}) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const userInfo = useSelector(({ userInfo }) => userInfo);
  const [disabled, setDisabled] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onChangeEmail = ({ target: { value } }) => setEmail(value);
  const onChangePassword = ({ target: { value } }) => setPassword(value);
  const authUser = ({ data: { accessToken, ...payload } }) => {
    localStorage.setItem('JWT_TOKEN', accessToken);
    dispatch({ type: SET_USER_INFO, payload });
    history.push('/');
  };
  const signIn = () => {
    const options = {
      successCb: authUser,
      errorCb: () => setDisabled(false),
      loadingMsg: 'Authorization...',
      successMsg: 'Authorization successful!',
      body: { username: email, password }
    };

    setDisabled(true);
    dispatch(logIn(options));
  };

  useEffect(() => {
    if (!isEmpty(userInfo)) dispatch({ type: REMOVE_USER_INFO });
  }, [userInfo, dispatch]);

  return (
    <div className={wrapper}>
      <LockIcon />
      <div className={title}>{t('Authorization')}</div>
      <TextField
        onChange={onChangeEmail}
        placeholder={t('Email')}
        classes={{ root: textField }}
        variant="outlined"
      />
      <TextField
        type="password"
        onChange={onChangePassword}
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
        disabled={disabled}
        onClick={signIn}
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
