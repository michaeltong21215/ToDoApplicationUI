import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTachometerAlt,
  faFileAlt,
  faBookmark,
  faSmile,
} from '@fortawesome/free-solid-svg-icons';

import AppLogo from '../common/AppLogo';
import Button from '../common/Button';
import SideMenuItem from '../common/SideMenuItem';

const styles = (theme) => ({
  main: {
    height: '100%',
    width: 250,
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 1,
    backgroundColor: 'white',
  },
  logo: {
    backgroundColor: '#f0f4fd',
    height: 70,
  },
  newtask: {
    padding: 20,
    paddingLeft: 50,
  },
  sidemenu: {
    paddingTop: 10,
    cursor: 'pointer',
  },
});

const LeftSideMenu = ({ classes }) => {
  const menu = [
    {
      icon: faTachometerAlt,
      label: 'Dashboard',
    },
    {
      icon: faFileAlt,
      label: 'My Task',
    },
    {
      icon: faBookmark,
      label: 'Bookmarks',
    },
    {
      icon: faSmile,
      label: 'Recommended',
    },
  ];
  const [selectIndex, setSelectIndex] = useState(0);

  const getMenuIcon = (iconName, style) => (
    <FontAwesomeIcon icon={iconName} style={style} />
  );

  const setToClicked = (idx) => setSelectIndex(idx);

  return (
    <div className={classes.main}>
      <div className={classes.logo}>
        <AppLogo size='medium' />
      </div>
      <div className={classes.newtask}>
        <Button
          label='+ Create New task'
          onClick={() => {}}
          style={{ width: 150 }}
        />
      </div>
      <div className={classes.sidemenu}>
        {menu.map((displaymenu, idx) => {
          const style = selectIndex === idx ? { color: 'white' } : {};
          return (
            <SideMenuItem
              icon={getMenuIcon(displaymenu.icon, style)}
              text={displaymenu.label}
              onClick={() => setToClicked(idx)}
              isClicked={selectIndex === idx}
              key={idx}
            />
          );
        })}
      </div>
    </div>
  );
};

export default withStyles(styles)(LeftSideMenu);
