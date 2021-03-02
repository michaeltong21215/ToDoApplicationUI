import { Fragment, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core';
import { Save as SaveIcon, Close as CloseIcon } from '@material-ui/icons';

import Panel from '../common/Panel';
import Button from '../common/Button';
import Textfield from '../common/Textfield';

import { NOOP, getTaskTimeFormat } from '../utils/utils';
import { CHOOSE_BUTTON_DIV_BORDER_COLOR } from '../utils/constant';
const styles = (theme) => ({
  header: {
    width: '100%',
    height: 80,
    backgroundColor: '#2a60e4',
    display: 'flex',
    justifyContent: 'space-between',
  },
  headerText: {
    paddingLeft: 40,
    fontSize: 24,
    color: 'white',
    padding: 20,
  },
  links: {
    display: 'flex',
  },
  link: {
    padding: 20,
    paddingTop: 30,
    color: 'white',
    display: 'flex',
    cursor: 'pointer',
  },
  linkText: {
    paddingRight: 10,
  },
  section: {
    padding: 15,
    paddingLeft: 30,
    display: 'flex',
  },
  subTaskSection: {
    paddingTop: 1,
    paddingLeft: 30,
  },
  sectionHeader: {
    fontWeight: 'bold',
    paddingBottom: 15,
  },
  taskHeader: {
    fontWeight: 'bold',
    paddingBottom: 15,
    fontSize: 24,
  },
  taskSubHeader: {
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  chooseThumbnail: {
    paddingTop: 10,
    paddingLeft: 20,
    paddingBottom: 10,
    border: `1px solid ${CHOOSE_BUTTON_DIV_BORDER_COLOR}`,
    width: 300,
  },
  subSection: {
    paddingLeft: 60,
  },
  sectionBorder: {
    width: '95%',
    borderBottom: `1px solid ${CHOOSE_BUTTON_DIV_BORDER_COLOR}`,
    marginLeft: 35,
  },
  subTaskField: {
    width: 600,
    paddingBottom: 10,
  },
  addTaskLink: {
    paddingLeft: 30,
  },
  subTaskBlock: {
    height: 480,
    overflow: 'scroll',
  },
});
const AddTask = ({ classes, onClose = NOOP }) => {
  const [title, setTitle] = useState('');
  const [subtaskList, setSubTaskList] = useState([
    { name: '', description: '' },
  ]);

  const hidThumbnailInput = useRef(null);
  const uploadThumbnail = (event) => hidThumbnailInput.current.click();

  const handleThumbnailChange = (event) => {
    const fileUploaded = event.target.files[0];
    console.log('file uploaded: ', fileUploaded);
  };

  const addSubTask = () => {
    const newSubTaskList = [...subtaskList];
    newSubTaskList.push({ name: '', description: '' });
    setSubTaskList(newSubTaskList);
  };

  const renderThumbNailSection = (
    <div>
      <div className={classes.sectionHeader}>Thumbnail</div>
      <div>
        <div className={classes.chooseThumbnail}>
          <Button
            isSelectButton
            label='Choose File'
            onClick={uploadThumbnail}
          />
        </div>

        <input
          type='file'
          ref={hidThumbnailInput}
          onChange={handleThumbnailChange}
          style={{ display: 'none' }}
        />
      </div>
    </div>
  );

  const renderTitleSection = (
    <div>
      <div className={classes.sectionHeader}>Title Name</div>
      <Textfield
        value={title}
        onChange={(text) => setTitle(text)}
        placeholder='title'
        style={{ width: 400 }}
      />
    </div>
  );

  const renderTimeSection = (
    <div>
      <div className={classes.sectionHeader}>Time</div>
      <div>{getTaskTimeFormat('20201220')}</div>
    </div>
  );

  const setSubTaskField = (field, idx, val) => {
    const newTaskList = [...subtaskList];
    newTaskList[idx][field] = val;
    setSubTaskList(newTaskList);
  };

  const renderSubTasks = () => {
    return (
      <div className={classes.subTaskBlock}>
        <div className={classes.subTaskSection}>
          {subtaskList.map((subTask, idx) => (
            <div>
              <div className={classes.taskHeader}>Sub task {idx + 1} </div>
              <div className={classes.subTaskField}>
                <div className={classes.taskSubHeader}>Name</div>
                <Textfield
                  value={subTask.name}
                  onChange={(text) => setSubTaskField('name', idx, text)}
                  placeholder='Enter the task title here'
                />
              </div>
              <div className={classes.subTaskField}>
                <div className={classes.taskSubHeader}>Description</div>
                <Textfield
                  value={subTask.name}
                  onChange={(text) => setSubTaskField('description', idx, text)}
                  placeholder='Enter description over here'
                  isDescription
                />
              </div>
            </div>
          ))}
        </div>
        <p className={classes.sectionBorder} />
        <div className={classes.addTaskLink}>
          <Link onClick={() => addSubTask()}>Add new Sub Task</Link>
        </div>
      </div>
    );
  };

  const renderContent = (
    <div>
      <div className={classes.section}>
        <div>{renderThumbNailSection}</div>
        <div className={classes.subSection}>{renderTitleSection}</div>
        <div className={classes.subSection}>{renderTimeSection}</div>
      </div>
      <p className={classes.sectionBorder} />
      <div>{renderSubTasks()}</div>
    </div>
  );

  const renderLinks = () => (
    <div className={classes.links}>
      <div className={classes.link}>
        <div className={classes.linkText}>Save</div>
        <div>
          <SaveIcon />
        </div>
      </div>
      <div className={classes.link} onClick={() => onClose()}>
        <div className={classes.linkText}>Cancel</div>
        <div>
          <CloseIcon />
        </div>
      </div>
    </div>
  );

  const renderHeader = (
    <div className={classes.header}>
      <div className={classes.headerText}>Add New Task</div>
      {renderLinks()}
    </div>
  );

  return (
    <Fragment>
      <Panel header={renderHeader} content={renderContent} />
    </Fragment>
  );
};

export default withStyles(styles)(AddTask);
