// node modules
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import isEmpty from 'lodash/isEmpty';

// material components
import Button from '@material-ui/core/Button';
import LinkMui from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';

// local component
import LockIcon from 'components/lock_icon';
import Input from 'components/input';

// local files
import { SET_USER_INFO, REMOVE_USER_INFO } from 'store/types';
import { setUserToLocalStorage } from 'common/utils';
import { logIn } from 'api';
import styles from './styles';

const Auth = ({
  classes: { wrapper, textField, title, signInButton, forgottenPass }
}) => {
  const { t } = useTranslation();
  const history = useHistory();
  const dispatch = useDispatch();
  const userInfo = useSelector(({ userInfo }) => userInfo);
  const [disabled, setDisabled] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [invalidUsername, setInvalidUsername] = useState(true);
  const [invalidPassword, setInvalidPassword] = useState(true);
  const onChangeUsername = ({ target: { value } }, valid) => {
    setInvalidUsername(!valid);
    setUsername(value);
  };
  const onChangePassword = ({ target: { value } }, valid) => {
    setPassword(value);
    setInvalidPassword(!valid);
  };
  const authUser = ({ data: { accessToken, ...payload } }) => {
    setUserToLocalStorage({ accessToken, ...payload });
    dispatch({ type: SET_USER_INFO, payload });
    history.push('/');
  };
  const signIn = () => {
    if (invalidUsername || invalidPassword) return;

    const options = {
      successCb: authUser,
      errorCb: () => setDisabled(false),
      loadingMsg: 'Authorization...',
      successMsg: 'Authorization successful!',
      body: { username, password }
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
      <Input
        validationType="username"
        onChange={onChangeUsername}
        placeholder={t('User name')}
        className={textField}
        value={username}
        errorDelay
      />
      <Input
        type="password"
        validationType="password"
        onChange={onChangePassword}
        placeholder={t('Password')}
        className={textField}
        value={password}
        errorDelay
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
