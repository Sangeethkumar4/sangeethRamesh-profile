import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import WorkRoundedIcon from '@material-ui/icons/WorkRounded';
import ComputerTwoToneIcon from '@material-ui/icons/ComputerTwoTone';
import PermIdentityRoundedIcon from '@material-ui/icons/PermIdentityRounded';
import {About} from './About';
import {WorkExperience} from './WorkExperience';
import {Technologies} from './Technologies';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export function IconTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
      console.log(newValue);
    setValue(newValue);
  };

  function renderInformation(){
      switch(value){
          case 0:
            return <About />
            case 1:
              return <WorkExperience/>
            case 2:
                return <Technologies />           
      }
  }

  return (
   <div>
    <Paper square className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
        aria-label="icon tabs example"
      >
        <Tab icon={<PermIdentityRoundedIcon />} aria-label="phone" />
        <Tab icon={<WorkRoundedIcon />} aria-label="phone" />
        <Tab icon={<ComputerTwoToneIcon />} aria-label="phone" />
      </Tabs>
    </Paper>
    {renderInformation()}
    </div>
  );
}