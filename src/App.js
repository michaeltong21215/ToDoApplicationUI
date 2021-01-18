import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';

import Login from './components/Login/Login';

import BackgroundImage from './imgs/background.jpg';

const styles = (theme) => ({
  main: {
    backgroundImage: `url(${BackgroundImage})`,
    height: '100vh',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    zIndex: 0,
  },
});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.main}>
        <main>
          <Switch>
            <Route path='/' component={Login} exact />
          </Switch>
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(App);
