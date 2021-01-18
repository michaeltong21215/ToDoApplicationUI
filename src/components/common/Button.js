import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { NOOP } from '../utils/utils';

const styles = (theme) => ({
  button: {
    backgroundColor: '#2a60e4',
    width: 270,
    height: 40,
    border: 'none',
    color: 'white',
    borderRadius: '8px 8px 8px 8px',
  },
});

const Button = ({ label = '', onClick = NOOP, classes }) => {
  return (
    <button onClick={onClick} className={classes.button}>
      {label}
    </button>
  );
};

export default withStyles(styles)(Button);
