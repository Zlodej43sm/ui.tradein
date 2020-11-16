// node modules
import React from 'react';
import PropTypes from 'prop-types';
import merge from 'lodash/merge';

// material components
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import { withStyles } from '@material-ui/core/styles';

// local files
import styles from '../checkbox_radio_common_styles';

const propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  controlLabelClasses: PropTypes.object,
  controlLabelProps: PropTypes.object,
  radioClasses: PropTypes.object,
  radioProps: PropTypes.object,
  color: PropTypes.string
};
const defaultProps = {
  color: 'primary',
  controlLabelClasses: {},
  controlLabelProps: {},
  radioProps: {},
  onChange: () => {}
};

const RadioWrapper = ({
  label,
  name,
  color,
  onChange,
  checked,
  controlLabelClasses,
  radioClasses,
  classes: { controlRoot },
  radioProps,
  controlLabelProps
}) => {
  const commonControlClasses = merge(
    { root: controlRoot },
    controlLabelClasses
  );
  return (
    <FormControlLabel
      classes={commonControlClasses}
      control={
        <Radio
          {...{
            checked,
            name,
            color,
            onChange,
            ...radioProps,
            classes: radioClasses
          }}
        />
      }
      label={label}
      {...controlLabelProps}
    />
  );
};

RadioWrapper.propTypes = propTypes;
RadioWrapper.defaultProps = defaultProps;

export default withStyles(styles)(RadioWrapper);
