import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  main: {
    height: '100%',
    width: 50,
    position: 'absolute',
    left: 0,
    top: 0,
  },
});

const LeftSideMenu = ({ classes }) => {
  return <div></div>;
};

export default withStyles(styles)(LeftSideMenu);
