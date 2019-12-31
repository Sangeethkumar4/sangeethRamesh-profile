import React from 'react';
import PhoneAndroidRoundedIcon from '@material-ui/icons/PhoneAndroidRounded';
import EmailRounded from '@material-ui/icons/EmailRounded';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {useStyles} from './personalInfo';
import { makeStyles } from '@material-ui/core/styles';

let array = [{key: '9080523535'}, {key: 'kumarsangeeth4@gmail.com'},{key: 'Github', link: 'https://github.com/Sangeethkumar4'} , {key: 'LinkedIn', link: 'https://www.linkedin.com/in/sangeeth-kumar-b099829a/'}];

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
    },
    link: {
        color: "white"
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
                    <div className={classes.icon, styles.iconOverride}><a href = "https://github.com/Sangeethkumar4" className = {styles.link}  target="_blank"> <GitHubIcon /></a></div>
                    <div className={classes.icon, styles.iconOverride}><a href = "https://www.linkedin.com/in/sangeeth-kumar-b099829a/"  target="_blank" className = {styles.link}><LinkedInIcon /></a></div>
                </div>
                <div className={classes.textContainer}>
                    {array.map(function (each, index) {
                        if(each.link != undefined)
                        return <a href= {each.link} key={index} className = {styles.link} target="_blank"><div className={classes.text, styles.textStyleOverride}>{each.key}</div></a>;
                        else
                            return (<div className={classes.text, styles.textStyleOverride} key={index}>{each.key}</div>);
                    })}
                </div>
        </div>
    );
 }