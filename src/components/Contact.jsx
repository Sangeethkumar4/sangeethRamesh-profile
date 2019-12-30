import React from 'react';
import PhoneAndroidRoundedIcon from '@material-ui/icons/PhoneAndroidRounded';
import EmailRounded from '@material-ui/icons/EmailRounded';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {useStyles} from './personalInfo';
import { makeStyles } from '@material-ui/core/styles';

let array = ['9080523535', 'kumarsangeeth4@gmail.com', 'Github', 'LinkedIn'];

const createStyles = makeStyles(theme => ({
    card: {
        float: "right"
    },
    iconOverride: {
        paddingTop: 1
    },
    textStyleOverride: {
        paddingTop: 5,
        fontSize : 20,
        paddingLeft: 10
    }
 }));

export function Contact() {
    const styles = createStyles();
    const classes = useStyles();
    return (
        <div className = {styles.card}>
                <div className={classes.personalInfo}>CONTACT</div>
                <div className={classes.icons}>
                    <div className={classes.icon, styles.iconOverride}><PhoneAndroidRoundedIcon /></div>
                    <div className={classes.icon, styles.iconOverride}><EmailRounded /></div>
                    <div className={classes.icon, styles.iconOverride}><a href = "https://github.com/Sangeethkumar4"></a><GitHubIcon /></div>
                    <div className={classes.icon, styles.iconOverride}><a href = "https://www.linkedin.com/in/sangeeth-kumar-b099829a/"></a><LinkedInIcon /></div>
                </div>
                <div className={classes.textContainer}>
                    {array.map(function (name, index) {
                        return <div key={index} className={classes.text, styles.textStyleOverride}>{name}</div>;
                    })}
                </div>
        </div>
    );
 }