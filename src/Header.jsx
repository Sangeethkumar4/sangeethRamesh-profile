import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from "@material-ui/core/styles";
import {Contact} from './components/Contact'

const useStyles = makeStyles(theme => ({
    header: {
      height: 150,
      backgroundColor: '#1976d2',
      color: 'white',
      width: "100%"
    },
    name: {
        fontSize: 30,
        fontWeight: "bold",
        padding : 20,
        paddingBottom : 5,
        paddingLeft: 50

    },
    description: {
        fontWeight: "bold",
        paddingLeft: 50,
        fontSize: 25
    },
    nameInfo: {
        float: "left"
    },
    personalInfo: {
        float: "right"
    }
  }));

export function Header() {
   const styles = useStyles();
  return (
    <div>
     <Paper className = {styles.header}>
      <div className={styles.nameInfo}><div className = {styles.name}>SANGEETH KUMAR</div> 
      <div className = {styles.description}>- Full Stack Developer, Technology Enthusiast</div>
      </div>
      <div>
      <Contact />
      </div>
    </Paper>
    </div>
  );
}