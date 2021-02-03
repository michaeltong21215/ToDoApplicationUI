import React from 'react';
import { withStyles } from '@material-ui/core';

const styles = (theme) => ({
  header: {
    fontWeight: 'bold',
    fontSize: 36,
  },
  subheader: {
    fontWeight: 'bold',
    fontSize: 24,
    borderBottom: '1px solid #DCDCDC',
    width: '80vw',
  },
  content: {
    paddingTop: 20,
  },
});
const Dashboard = ({ classes }) => {
  const renderMyTasks = () => {
    return (
      <div className={classes.content}>
        <div className={classes.subheader}>My Tasks</div>
      </div>
    );
  };

  return (
    <div>
      <div className={classes.header}>Good Morning Michael!</div>
      {renderMyTasks()}
    </div>
  );
};

export default withStyles(styles)(Dashboard);
