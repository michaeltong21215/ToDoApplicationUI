import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { NOOP } from '../utils/utils';
const styles = (theme) => ({
  main: {
    backgroundColor: (props) => (props.isClicked ? '#2a60e4' : 'white'),
    display: 'flex',
    fontSize: 24,
    height: 40,
    paddingTop: 5,
    paddingLeft: 30,
    borderBottom: (props) => (props.isClicked ? '' : '1px solid #DCDCDC'),
  },
  icon: {
    paddingRight: 15,
  },
  text: {
    color: (props) => (props.isClicked ? 'white' : 'black'),
    fontFamily:
      "'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
    fontWeight: 600,
  },
});

const SideMenuItem = ({ icon, text, onClick = NOOP, classes, key = '1' }) => {
  return (
    <div onClick={onClick} className={classes.main} key={key}>
      <div className={classes.icon}>{icon}</div>
      <div className={classes.text}>{text}</div>
    </div>
  );
};

export default withStyles(styles)(SideMenuItem);
