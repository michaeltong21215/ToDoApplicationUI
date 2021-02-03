import LeftSideMenu from './LeftSideMenu';

import React from 'react';
import { useLocation } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Header from './Header';
import { isLoggedIn } from '../utils/utils';

const styles = (theme) => ({
  main: {
    display: 'flex',
  },
});
const AppSkin = ({ classes }) => {
  const location = useLocation();
  if (isLoggedIn(location.pathname)) {
    return (
      <div className={classes.main}>
        <LeftSideMenu />
        <Header />
      </div>
    );
  }

  return '';
};

export default withStyles(styles)(AppSkin);
