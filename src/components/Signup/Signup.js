import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppLogo from '../common/AppLogo';
import Textfield from '../common/Textfield';
import Button from '../common/Button';

const styles = (theme) => ({
  panel: {
    width: 360,
    height: 600,
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
  register: {
    paddingTop: 20,
  },
  signIn: {
    paddingTop: 20,
    fontSize: 12,
    paddingLeft: 40,
  },
});

const Signup = ({ classes }) => {
  const [fields, setFields] = useState({
    firstName: '',
    lastName: '',
    password: '',
    email: '',
    phoneNumber: '',
    confirmPassword: '',
  });

  const formFields = [
    {
      value: fields.firstName,
      onChange: (text) => setFields({ ...fields, firstName: text }),
      placeholder: 'First name',
    },
    {
      value: fields.lastName,
      onChange: (text) => setFields({ ...fields, lastName: text }),
      placeholder: 'Last name',
    },
    {
      value: fields.email,
      onChange: (text) => setFields({ ...fields, email: text }),
      placeholder: 'email',
    },
    {
      value: fields.phoneNumber,
      onChange: (text) => setFields({ ...fields, phoneNumber: text }),
      placeholder: 'Phone number',
    },
    {
      value: fields.password,
      onChange: (text) => setFields({ ...fields, password: text }),
      placeholder: 'password',
      isPassword: true,
    },
    {
      value: fields.confirmPassword,
      onChange: (text) => setFields({ ...fields, confirmPassword: text }),
      placeholder: 'confirm password',
      isPassword: true,
    },
  ];

  return (
    <div className={classes.main}>
      <AppLogo />
      <div className={classes.panel}>
        <div className={classes.form}>
          <div className={classes.header}>Sign Up</div>
          {formFields.map((field) => (
            <div className={classes.textfield}>
              <Textfield
                value={field.value}
                onChange={field.onChange}
                placeholder={field.placeholder}
                isPassword={field.isPassword}
              />
            </div>
          ))}
          <div className={classes.register}>
            <Button label='Register' />
          </div>
          <div className={classes.signIn}>
            Already have an Account? <Link to='/login'>Sign in</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(Signup);
