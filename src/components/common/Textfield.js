import React, { useState } from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import { NOOP } from '../utils/utils';

const styles = (theme) => ({
  inputField: {
    height: 40,
    width: 225,
    border: 'none',
    backgroundColor: '#F5F5F5',
    '&::placeholder': {
      paddingLeft: 20,
    },
    '&:focus': {
      outline: 'none',
    },
    '&::-ms-reveal': {
      display: 'none',
    },
    '&::-ms-clear': {
      display: 'none',
    },
  },
  textArea: {
    width: 600,
    outline: 'none',
    resize: 'none',
    border: '1px solid #E8E8E8',
    borderRadius: 8,
    backgroundColor: '#F5F5F5',
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "sans-serif"',
    '&::placeholder': {
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "sans-serif"',
    },
  },
  main: {
    border: '1px solid #E8E8E8',
    borderRadius: 8,
    backgroundColor: '#F5F5F5',
    '&:focus': {
      outline: 'none',
    },
  },
  pwdAdornment: {
    paddingRight: 10,
    cursor: 'pointer',
  },
});

const TextField = ({
  value = '',
  onChange = NOOP,
  placeholder = '',
  classes,
  isPassword,
  style = {},
  isDescription,
}) => {
  const showPwdIcon = <FontAwesomeIcon icon={faEye} />;
  const hidePwdIcon = <FontAwesomeIcon icon={faEyeSlash} />;

  const [showPwd, setShowPwd] = useState(true);
  const pwdIcon = showPwd ? showPwdIcon : hidePwdIcon;

  const setValue = (e) => {
    onChange(e.target.value);
  };

  const renderTextField = () => {
    return (
      <div className={classes.main}>
        <input
          value={value}
          onChange={setValue}
          placeholder={placeholder}
          className={classes.inputField}
          type={isPassword && showPwd ? 'password' : 'text'}
          style={style}
        />{' '}
        {isPassword && (
          <i
            className={classes.pwdAdornment}
            onClick={() => setShowPwd(!showPwd)}>
            {pwdIcon}
          </i>
        )}
      </div>
    );
  };

  return (
    <div>
      {isDescription ? (
        <textarea
          id='myTextArea'
          rows='6'
          cols='80'
          className={classes.textArea}
          placeholder={placeholder}
        />
      ) : (
        renderTextField()
      )}
    </div>
  );
};

export default withStyles(styles)(TextField);
