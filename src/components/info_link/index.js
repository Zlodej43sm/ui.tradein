// node modules
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

// material components
import { withStyles } from '@material-ui/core/styles';

// local files
import { colors } from './utils';
import styles from './styles';

const propTypes = {
  to: PropTypes.string,
  type: PropTypes.oneOf(colors),
  label: PropTypes.string,
  count: PropTypes.number,
  linkClassName: PropTypes.string
};

const defaultProps = {
  linkClassName: ''
};

const InfoLink = ({
  to,
  label,
  count,
  type,
  linkClassName,
  classes: { countClass, wrapper, labelClass, ...colorClasses }
}) => {
  const currentColor = colors.find((color) => type === color) || colors[0];
  const colorClass = colorClasses[currentColor];
  const className = classNames(wrapper, colorClass, linkClassName);

  return (
    <Link {...{ to, className }}>
      <span className={countClass}>{count}</span>
      <span>{label}</span>
    </Link>
  );
};

InfoLink.propTypes = propTypes;
InfoLink.defaultProps = defaultProps;

export default withStyles(styles)(InfoLink);
