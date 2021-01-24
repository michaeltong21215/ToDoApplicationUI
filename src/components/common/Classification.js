import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  main: {
    width: 320,
    height: 120,
    backgroundColor: (props) => (props.isSelected ? '#2a60e4' : 'white'),
    boxShadow:
      '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    borderRadius: '12px 12px 12px 12px',
    display: 'flex',
    paddingLeft: 20,
    paddingTop: 10,
    cursor: 'pointer',
  },
  logo: {
    borderRadius: '50%',
    width: 120,
    height: 100,
    objectFit: 'cover',
  },
  text: {
    paddingTop: 35,
    paddingLeft: 40,
    fontWeight: 'bold',
    fontSize: 24,
    color: (props) => (props.isSelected ? 'white' : 'black'),
  },
});

const Classification = ({ text = '', logo, classes }) => {
  return (
    <div className={classes.main}>
      <div>
        <img src={logo} className={classes.logo} />
      </div>
      <div className={classes.text}>{text}</div>
    </div>
  );
};

export default withStyles(styles)(Classification);
