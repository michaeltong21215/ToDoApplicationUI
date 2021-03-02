import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { NOOP } from '../utils/utils';
import {
  CHOOSE_BUTTON_COLOR,
  CHOOSE_BUTTON_TEXT_COLOR,
} from '../utils/constant';

const styles = (theme) => ({
  bluebutton: {
    backgroundColor: '#2a60e4',
    width: 270,
    height: 40,
    border: 'none',
    color: 'white',
    borderRadius: '8px 8px 8px 8px',
  },
  choosebutton: {
    backgroundColor: CHOOSE_BUTTON_COLOR,
    width: 100,
    height: 20,
    color: CHOOSE_BUTTON_TEXT_COLOR,
    border: 'none',
  },
});

const Button = ({
  label = '',
  isSelectButton,
  onClick = NOOP,
  classes,
  style = {},
}) => {
  const buttonClass = isSelectButton
    ? classes.choosebutton
    : classes.bluebutton;
  return (
    <button onClick={onClick} className={buttonClass} style={style}>
      {label}
    </button>
  );
};

export default withStyles(styles)(Button);
