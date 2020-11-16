// node modules
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// material components
import { withStyles } from '@material-ui/core/styles';

// local files
import { types } from './utils';
import styles from './styles';

const propTypes = {
  text: PropTypes.string,
  type: PropTypes.oneOf(types),
  labelClassName: PropTypes.string
};

const defaultProps = {
  labelClassName: ''
};

const StateLabel = ({
  labelClassName,
  classes: { wrapper, ...colorClasses },
  text,
  type
}) => {
  const currentColor =
    types.find((currentType) => type === currentType) || types[0];
  const colorClass = colorClasses[currentColor];
  const className = classNames(wrapper, colorClass, labelClassName);

  return <div className={className}>{text}</div>;
};

StateLabel.propTypes = propTypes;
StateLabel.defaultProps = defaultProps;

export default withStyles(styles)(StateLabel);
