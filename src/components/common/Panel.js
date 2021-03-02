import React from 'react';

import { withStyles } from '@material-ui/core';

const styles = (theme) => ({
  main: {
    position: 'fixed',
    left: '50%',
    top: '40%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    width: '80vw',
    height: 700,
  },
  overlay: {
    position: 'fixed',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    zIndex: 9999,
  },
});

const Panel = ({ header = '', content = '', classes }) => {
  return (
    <div className={classes.overlay}>
      <div className={classes.main}>
        <div>{header}</div>
        <div>{content}</div>
      </div>
    </div>
  );
};

export default withStyles(styles)(Panel);
