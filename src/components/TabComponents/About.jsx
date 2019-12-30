import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import {Education} from './Education'
import {PersonalInfo} from '../personalInfo'

const useStyles = makeStyles({
  card: {
    width: "80%",
    border: "1px solid #1976d2",
    margin: 50
  },
  text: {
      fontSize: 25,
      color: '#1976d2'
  },
  wrapper: {
      float: "left",
      maxWidth: "50%",
  }
});

export function About() {
  const classes = useStyles();

  return (
      <div>
    <div className = {classes.wrapper}>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Sangeeth Kumar
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className = {classes.text}>
          Dynamic professional with nearly 3+ years of experience in Software Development as Full Stack Developer.
        Skilled in Java and JavaScript. Adept in handling busy schedules and
        crucial deadlines. Graduated as strong engineering professional with
        Bachelor of Engineering from Sri Venkteswara College Of Engineering.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <div><PersonalInfo/></div>
    </div>
    <Education />
    </div>
  );
}
