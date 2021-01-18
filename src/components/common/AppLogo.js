import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Logo from '../../imgs/Logo.jpg';

const styles = (theme) => ({
  logo: {
    height: '10vh',
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
