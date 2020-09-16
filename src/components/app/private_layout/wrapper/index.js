// node modules
import React from 'react';

// material components
import { withStyles } from '@material-ui/core/styles';

// local components
import Header from '../../header';
import SideBar from '../../side_bar';

// local files
import styles from './styles';

const Wrapper = ({ classes: { privatePage }, children }) => (
  <div className={privatePage}>
    <Header />
    <SideBar />
    {children}
  </div>
);

export default withStyles(styles)(Wrapper);