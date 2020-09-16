// node modules
import React from 'react';

// material components
import { withStyles } from '@material-ui/core/styles';

// local components
import Header from '../../header';

// local files
import styles from './styles';

const Wrapper = ({ classes: { publicPage }, children }) => (
  <div className={publicPage}>
    <Header />
    {children}
  </div>
);

export default withStyles(styles)(Wrapper);
