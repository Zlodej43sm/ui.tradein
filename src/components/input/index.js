// node modules
import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// material components
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

// local components
import debounce from 'lodash/debounce';
import { validator } from './validator';
import styles from './styles';

const propTypes = {
  customClasses: PropTypes.object,
  value: PropTypes.string,
  onChange: PropTypes.func,
  errorText: PropTypes.string,
  variant: PropTypes.string,
  validationType: PropTypes.string,
  className: PropTypes.string,
  delayed: PropTypes.bool,
  delayTime: PropTypes.number,
  error: PropTypes.bool
};

const defaultProps = {
  errorText: 'Enter correct value!',
  customClasses: { root: '' },
  variant: 'outlined',
  onChange: () => {},
  errorDelay: false,
  delayTime: 300,
  className: '',
  error: false,
  value: ''
};

const Input = ({
  onChange,
  value,
  validationType,
  error,
  classes: { textField, errorDescription, inputWrapper, alertIcon },
  customClasses: { root, ...otherClasses },
  className,
  variant,
  errorText,
  delayTime,
  errorDelay,
  ...otherProps
}) => {
  const { t } = useTranslation();
  const [invalid, setInvalid] = useState(false);
  const rootClass = classNames(textField, { [root]: !!root });
  const inputClasses = { root: rootClass, ...otherClasses };
  const inputClassName = classNames(inputWrapper, className);
  const isError = invalid || error;
  const toggleError = (valid, invalid) => {
    if (!valid) setInvalid(true);
    if (valid && invalid) setInvalid(false);
  };
  const { current: delayedToggleError } = useRef(
    debounce(toggleError, delayTime)
  );
  const validation = (value) => {
    if (!validator[validationType]) return true;

    const valid = validator[validationType](value);

    if (errorDelay) delayedToggleError(valid, invalid);
    else toggleError(valid, invalid);

    return valid;
  };
  const handleChange = (event) => {
    const { value } = event.target;
    const valid = validation(value);

    onChange(event, valid);
  };

  return (
    <div className={inputClassName}>
      <TextField
        error={isError}
        value={value}
        onChange={handleChange}
        classes={inputClasses}
        variant={variant}
        {...otherProps}
      />
      {isError && (
        <span className={errorDescription}>
          <ErrorOutlineIcon className={alertIcon} /> {t(errorText)}
        </span>
      )}
    </div>
  );
};

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default withStyles(styles)(Input);
