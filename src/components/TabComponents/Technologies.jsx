import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Rating from '@material-ui/lab/Rating';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import {TechnicalSkills} from './TechnicalSkills';
import {Technology} from '../../constants/index';

const useStyles = makeStyles(theme => ({
   card: {
       width: 500,
       border: "1px solid #1976d2",
       margin: 50
   },
   header: {
    borderBottom: "1px solid",
    textTransform: "uppercase",
    color: "white",
    backgroundColor: "#1976d2"
   },
   item:{
       paddingBottom: 30
   },
   name:{
    fontSize: 20,
    textTransform: "uppercase",
    float: "left"
   },
   rating:{
    paddingLeft: 30,
    float: "right"
   },
   technicalSkills: {
       float: "left",
       width: "50%"
   },
   technologies:{
       float: "right",
       paddingRight: 50,
       paddingTop: 0
   }
}));


function renderTechnicalSkills() {
    return <TechnicalSkills />
}

export function Technologies() {
    const styles = useStyles();
  return (
    <div>
        <div className= {styles.technicalSkills}>
      {renderTechnicalSkills()}
      </div>
      <div className = {styles.technologies}>
      {Technology.map(function (each, index) {
         return <Card className= {styles.card} key={index}>
             <CardHeader title={each.label} className={styles.header}/>
          <CardContent>
             <div>
                {each.items.map((each, identity) => {
                return(<div key= {identity} className = {styles.item}>
                <div className={styles.name}>{each.name}</div>
                <div className={styles.rating}><Rating name="customized-10" value={each.score} max={5} /></div>
                </div>)
                })}
                </div>
                </CardContent>
        </Card>   
      })}
      </div>
    </div>
  );
}