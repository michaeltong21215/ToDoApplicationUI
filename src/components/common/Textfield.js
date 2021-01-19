import React, { useState } from 'react';
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
}) => {
  const showPwdIcon = <FontAwesomeIcon icon={faEye} />;
  const hidePwdIcon = <FontAwesomeIcon icon={faEyeSlash} />;

  const [showPwd, setShowPwd] = useState(false);

  const setValue = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className={classes.main}>
      <input
        value={value}
        onChange={setValue}
        placeholder={placeholder}
        className={classes.inputField}
        type={isPassword ? 'password' : 'text'}
      />
      {isPassword && <i className={classes.pwdAdornment}>{showPwdIcon}</i>}
    </div>
  );
};

export default withStyles(styles)(TextField);
