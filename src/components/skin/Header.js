import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  main: {
    position: 'absolute',
    backgroundColor: '#2a60e4',
    width: '100%',
    height: 70,
  },
});
const Header = ({ classes }) => {
  return <div className={classes.main} />;
};

export default withStyles(styles)(Header);
