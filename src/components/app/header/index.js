// node modules
import React from 'react';

// material components
import { withStyles } from '@material-ui/core';

// local components
import Logo from '../../../common/components/logo';
import LanguageBar from '../../../common/components/language_bar';

// local files
import styles from './styles';

const Header = ({ classes: { header } }) => {
  return (
    <div className={header}>
      <Logo />
      <LanguageBar />
    </div>
  );
};

export default withStyles(styles)(Header);
