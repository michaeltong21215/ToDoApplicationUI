import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';

import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
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
  getRoutes = () => {
    const routes = [
      {
        path: '/',
        component: Login,
        isExact: true,
      },
      {
        path: '/signup',
        component: Signup,
      },
    ];
    return routes;
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.main}>
        <main>
          <Switch>
            {this.getRoutes().map((route, idx) => {
              return route.isExact ? (
                <Route
                  key={idx}
                  path={route.path}
                  component={route.component}
                  exact
                />
              ) : (
                <Route
                  key={idx}
                  path={route.path}
                  component={route.component}
                />
              );
            })}
          </Switch>
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(App);
