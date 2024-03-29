// node modules
import React from 'react';
import { Link } from 'react-router-dom';

// material components
import { withStyles } from '@material-ui/core';

// local components
import Logo from 'components/logo';
import UserInfo from 'components/userInfo';
import LanguageBar from 'components/language_bar';

// local files
import styles from './styles';

const Header = ({ classes: { header, rightBar, link }, auth }) => {
  const correctPath = auth ? '/' : '/auth';

  return (
    <div className={header}>
      <Link className={link} to={correctPath}>
        <Logo />
      </Link>
      <div className={rightBar}>
        <LanguageBar />
        {auth && <UserInfo />}
      </div>
    </div>
  );
};

export default withStyles(styles)(Header);
