import React, { useState } from 'react';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core';
import Button from '../common/Button';
import AddTask from './AddTask';
import { NOOP } from '../utils/utils';

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
  noPost: {
    display: 'flex',
  },
  noPostMsg: {
    paddingTop: 20,
  },
  button: {
    paddingTop: 15,
    position: 'absolute',
    left: 500,
  },
  section: {
    height: 300,
  },
});
const Dashboard = ({ classes }) => {
  const [showAddTask, setShowAddTask] = useState(false);
  const renderMyTasks = () => {
    return (
      <div className={classes.content}>
        <div className={classes.subheader}>My Tasks</div>
        <div className={classes.noPost}>
          <div className={classes.noPostMsg}>
            You don't have any tasks to view. Please add new tasks.
          </div>
          <div className={classes.button}>
            <Button
              label='Add New Tasks'
              onClick={() => setShowAddTask(true)}
              style={{ width: 150 }}
            />
          </div>
        </div>
      </div>
    );
  };

  const renderBookmarkTasks = () => {
    return (
      <div className={classes.content}>
        <div className={classes.subheader}>Bookmarks</div>
        <div className={classes.noPost}>
          <div className={classes.noPostMsg}>
            You don't have any bookmarks to view. Please add new bookmarks.
          </div>
          <div className={classes.button}>
            <Button
              label='View Recommended'
              onClick={() => {}}
              style={{ width: 150 }}
            />
          </div>
        </div>
      </div>
    );
  };

  const renderRecommendedTasks = () => {
    return (
      <div className={classes.content}>
        <div className={classes.subheader}>Recommneded</div>
        <div className={classes.noPost}>
          <div className={classes.noPostMsg}>
            There are either no recommneded tasks to view or you have not
            selected any category to see recommneded tasks.
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className={classes.header}>Good Morning Michael!</div>
      <div className={classes.section}>{renderMyTasks()}</div>
      <div className={classes.section}>{renderBookmarkTasks()}</div>
      <div className={classes.section}>{renderRecommendedTasks()}</div>
      {showAddTask ? <AddTask onClose={() => setShowAddTask(false)} /> : ''}
    </div>
  );
};

const DashboardComponent = withStyles(styles)(Dashboard);

const mapStateToProps = ({ items }) => {
  return {
    personaltasks: items.personaltasks,
  };
};
export default connect(mapStateToProps, null)(DashboardComponent);
