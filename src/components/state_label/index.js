// node modules
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// material components
import { withStyles } from '@material-ui/core/styles';

// local files
import styles from './styles';

const propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  labelClassName: PropTypes.string
};

const defaultProps = {
  labelClassName: ''
};

const StateLabel = ({
  labelClassName,
  classes: { wrapper, newColor, pendingColor, finishedColor, infoColor },
  text,
  color
}) => {
  const colors = {
    new: newColor,
    pending: pendingColor,
    finished: finishedColor,
    info: infoColor
  };
  const colorClass = colors[color] || colors.info;
  const className = classNames(wrapper, colorClass, labelClassName);

  return <div className={className}>{text}</div>;
};

StateLabel.propTypes = propTypes;
StateLabel.defaultProps = defaultProps;

export default withStyles(styles)(StateLabel);
