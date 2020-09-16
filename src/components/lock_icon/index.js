// node modules
import React from 'react';

// material components
import { withStyles } from '@material-ui/core/styles';
import Lock from '@material-ui/icons/LockOutlined';

// local files
import styles from './styles';

const LockIcon = ({ classes: { icon, iconWrapper } }) => (
  <div className={iconWrapper}>
    <Lock className={icon} />
  </div>
);

export default withStyles(styles)(LockIcon);
