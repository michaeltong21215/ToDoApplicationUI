import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Logo from '../../imgs/logo_small.png';

const styles = (theme) => ({
  logo: {
    width: 200,
    backgroundColor: 'transparent',
    position: 'relative',
    top: '-20px',
  },
});
const AppLogo = ({ classes }) => {
  return (
    <div>
      <img src={Logo} className={classes.logo} />
    </div>
  );
};

export default withStyles(styles)(AppLogo);
