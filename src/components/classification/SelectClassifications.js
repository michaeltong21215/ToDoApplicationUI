import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Art from '../../imgs/classifications/Art.jpg';
import Dance from '../../imgs/classifications/Dance.jpg';
import Family from '../../imgs/classifications/Family.jpg';
import Food from '../../imgs/classifications/Food.jpg';
import Fun from '../../imgs/classifications/Fun.jpg';
import Home from '../../imgs/classifications/Home.jpg';
import IT from '../../imgs/classifications/IT.jpg';
import Love from '../../imgs/classifications/Love.jpg';
import Music from '../../imgs/classifications/Music.jpg';
import Religion from '../../imgs/classifications/Religion.jpg';
import Sports from '../../imgs/classifications/Sports.jpg';
import Work from '../../imgs/classifications/Work.jpg';
import Button from '../common/Button';

import Classification from '../common/Classification';

const styles = (theme) => ({
  main: {
    position: 'relative',
    left: 125,
    top: 125,
  },
  panel: {
    width: 1600,
    height: 750,
    backgroundColor: 'white',
    boxShadow:
      '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    borderRadius: '12px 12px 12px 12px',
  },
  form: {
    paddingLeft: 50,
  },
  header: {
    paddingTop: 80,
    fontWeight: 'bold',
    fontSize: 32,
    display: 'flex',
    justifyContent: 'space-between',
  },
  totalSelected: {
    paddingRight: 70,
  },
  classifications: {
    paddingTop: 25,
    display: 'grid',
    gridTemplateColumns: '200px 200px 200px 200px',
    gridGap: 20,
    columnGap: 180,
  },
  register: {
    paddingTop: 40,
    display: 'flex',
    flexDirection: 'row-reverse',
    paddingRight: 70,
  },
});
const SelectClassifications = ({ classes, history }) => {
  const classifications = [
    {
      type: 'Art',
      src: Art,
      selected: false,
    },
    {
      type: 'Dance',
      src: Dance,
      selected: false,
    },
    {
      type: 'Family',
      src: Family,
      selected: false,
    },
    {
      type: 'Food',
      src: Food,
      selected: false,
    },
    {
      type: 'Fun',
      src: Fun,
      selected: false,
    },
    {
      type: 'Home',
      src: Home,
      selected: false,
    },
    {
      type: 'IT',
      src: IT,
      selected: false,
    },
    {
      type: 'Love',
      src: Love,
      selected: false,
    },
    {
      type: 'Music',
      src: Music,
      selected: false,
    },
    {
      type: 'Religion',
      src: Religion,
      selected: false,
    },
    {
      type: 'Sports',
      src: Sports,
      selected: false,
    },
    {
      type: 'Work',
      src: Work,
      selected: false,
    },
  ];
  const [selectClassification, setSelectClassification] = useState(
    classifications
  );

  const onClickClassification = (idx) => {
    const newSelected = selectClassification;
    newSelected[idx].selected = !newSelected[idx].selected;

    setSelectClassification([...newSelected]);
  };

  const renderForm = () => {
    const selectedCount = selectClassification.filter(
      (classification) => classification.selected === true
    ).length;

    return (
      <div className={classes.form}>
        <div className={classes.header}>
          <div>Choose your categories</div>
          <div className={classes.totalSelected}>
            {`${selectedCount}/${classifications.length}`}
          </div>
        </div>
        <div className={classes.classifications}>
          {selectClassification.map((classification, idx) => (
            <div onClick={() => onClickClassification(idx)} key={idx}>
              <Classification
                text={classification.type}
                logo={classification.src}
                isSelected={classification.selected}
              />
            </div>
          ))}
        </div>
        <div className={classes.register}>
          <Button
            label='Register'
            onClick={() => history.push('/classification')}
            style={{ width: 150 }}
          />
        </div>
      </div>
    );
  };

  return (
    <div className={classes.main}>
      <div className={classes.panel}>{renderForm()}</div>
    </div>
  );
};

export default withRouter(withStyles(styles)(SelectClassifications));
