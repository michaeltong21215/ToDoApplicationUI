import React, { useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppLogo from '../common/AppLogo';
import Textfield from '../common/Textfield';
import Button from '../common/Button';

const styles = (theme) => ({
  panel: {
    width: 360,
    height: 500,
    backgroundColor: 'white',
    boxShadow:
      '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    borderRadius: '12px 12px 12px 12px',
    display: 'flex',
  },
  main: {
    position: 'relative',
    left: '15vw',
    top: 100,
  },
  header: {
    paddingTop: '3vh',
    fontWeight: 'bold',
    paddingLeft: 80,
    fontSize: 24,
  },
  form: {
    paddingLeft: 50,
  },
  textfield: {
    paddingTop: 20,
  },
  rememberme: {
    display: 'flex',
    paddingTop: 30,
  },
  checkboxLabel: {
    paddingLeft: 5,
    marginTop: -2,
  },
  login: {
    paddingTop: 20,
  },
  signUp: {
    paddingTop: 20,
    fontSize: 12,
    paddingLeft: 40,
  },
});

const Login = ({ classes, history }) => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [willCacheCreds, setWillCacheCreds] = useState(false);
  const setEmail = (text) => setCredentials({ ...credentials, email: text });

  const setPassword = (text) =>
    setCredentials({ ...credentials, password: text });

  const setCacheCreds = () => setWillCacheCreds(!willCacheCreds);

  const renderRememberCheckbox = () => {
    return (
      <div className={classes.rememberme}>
        <input
          type='checkbox'
          checked={willCacheCreds}
          onChange={setCacheCreds}
        />
        <label className={classes.checkboxLabel}>Remember me</label>
      </div>
    );
  };

  return (
    <div className={classes.main}>
      <AppLogo />
      <div className={classes.panel}>
        <div className={classes.form}>
          <div className={classes.header}>Sign In</div>
          <div className={classes.textfield}>
            <Textfield
              value={credentials.email}
              onChange={setEmail}
              placeholder='Email'
            />
          </div>
          <div className={classes.textfield}>
            <Textfield
              value={credentials.password}
              onChange={setPassword}
              placeholder='Password'
              isPassword
            />
          </div>
          {renderRememberCheckbox()}
          <div className={classes.login}>
            <Button label='Login' />
          </div>
          <div className={classes.signUp}>
            Don't have an Account? <Link to='/signup'>Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(withStyles(styles)(Login));
