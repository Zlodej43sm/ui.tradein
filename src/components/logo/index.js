// node modules
import React from 'react';
import PropTypes from 'prop-types';

// node modules
import { withStyles } from '@material-ui/core/styles';

// local files
import styles from './styles';

const propTypes = { size: PropTypes.number };
const defaultProps = { size: 32 };

const Logo = ({ classes: { logo }, size }) => (
  <span style={{ fontSize: size }} className={logo}>
    Warehouse
  </span>
);

Logo.propTypes = propTypes;
Logo.defaultProps = defaultProps;

export default withStyles(styles)(Logo);
