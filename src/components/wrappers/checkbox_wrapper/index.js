// node modules
import React from 'react';
import PropTypes from 'prop-types';
import merge from 'lodash/merge';

// material components
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';

// local files
import styles from '../checkbox_radio_common_styles';

const propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  controlLabelClasses: PropTypes.object,
  checkboxClasses: PropTypes.object,
  checkboxProps: PropTypes.object,
  controlLabelProps: PropTypes.object,
  color: PropTypes.string
};
const defaultProps = {
  color: 'primary',
  controlLabelProps: {},
  checkboxProps: {},
  controlLabelClasses: {},
  onChange: () => {}
};

const CheckboxWrapper = ({
  label,
  name,
  color,
  onChange,
  checked,
  controlLabelClasses,
  checkboxClasses,
  classes: { controlRoot },
  checkboxProps,
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
        <Checkbox
          {...{
            checked,
            onChange,
            name,
            color,
            ...checkboxProps,
            classes: checkboxClasses
          }}
        />
      }
      label={label}
      {...controlLabelProps}
    />
  );
};

CheckboxWrapper.propTypes = propTypes;
CheckboxWrapper.defaultProps = defaultProps;

export default withStyles(styles)(CheckboxWrapper);
