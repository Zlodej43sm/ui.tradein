// node modules
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ChromePicker } from 'react-color';

// material components
import { withStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

// local components
import Input from '../input';

// local files
import { parseColor } from 'common/utils';
import styles from './styles';

const propTypes = {
  onColorChanged: PropTypes.func,
  className: PropTypes.string,
  defaultColor: PropTypes.object
};

const defaultProps = {
  onColorChanged: () => {},
  className: ''
};

const ColorPickerInput = ({
  classes: { wrapper, picker, colorInputWrapper },
  onColorChanged,
  className,
  defaultColor
}) => {
  const [pickerState, setPickerState] = useState(false);
  const [color, setColor] = useState({
    hex: '#000000',
    hsl: { h: 0, s: 0, l: 0, a: 1 },
    hsv: { h: 0, s: 0, v: 0, a: 1 },
    oldHue: 0,
    rgb: { r: 0, g: 0, b: 0, a: 1 },
    source: 'hex'
  });
  const togglePicker = () => setPickerState(!pickerState);
  const onChangeComplete = (color) => {
    setColor(color);
    onColorChanged(color);
  };
  const { hex, hsl, rgb } = color;
  const parsedColor = parseColor(rgb, hex);
  const pickerClassName = classNames(colorInputWrapper, className);

  useEffect(() => {
    if (defaultColor) {
      setColor(defaultColor);
    }
  }, [defaultColor]);

  return (
    <div className={pickerClassName}>
      <Input
        onClick={togglePicker}
        value={parsedColor}
        InputProps={{
          endAdornment: (
            <InputAdornment>
              <div style={{ background: parsedColor }} className={wrapper} />
            </InputAdornment>
          )
        }}
      />
      {pickerState && (
        <ClickAwayListener onClickAway={() => setPickerState(false)}>
          <ChromePicker
            className={picker}
            color={hsl}
            onChangeComplete={onChangeComplete}
          />
        </ClickAwayListener>
      )}
    </div>
  );
};

ColorPickerInput.propTypes = propTypes;
ColorPickerInput.defaultProps = defaultProps;

export default withStyles(styles)(ColorPickerInput);
