import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CalendarTodayRoundedIcon from '@material-ui/icons/CalendarTodayRounded';
import LocationCityRoundedIcon from '@material-ui/icons/LocationCityRounded';
import PlaceIcon from '@material-ui/icons/Place';
import LanguageIcon from '@material-ui/icons/Language';

let array = ['17th Sept 1995', 'Chennai, TamilNadu', 'India', 'Tamil, English, Telugu'];

export const useStyles = makeStyles(theme => ({
    card: {
        width: "80%",
        border: "1px solid #1976d2",
        color: '#1976d2',
        margin: 50
        },
    personalInfo: {
        paddingRight: 75,
        fontSize: 20,
        paddingTop: 10
    },
    icons: {
        width: 30,
        borderRight: "1px solid",
        paddingRight: 5,
        float: "left"
    },
    textContainer: {
        float: "left"
    },
    text: {
        fontSize : 20,
        paddingLeft: 10,
        paddingTop: 15
    },
    icon: {
        paddingTop: 10
    },
    actionArea: {
        paddingLeft: 20
    }
}));

export function PersonalInfo() {
    const styles = useStyles();
    return (
        <Card className={styles.card}>
            <CardActionArea className = {styles.actionArea}>
                <div className={styles.personalInfo}>PERSONAL INFORMATION</div>
                <div className={styles.icons}>
                    <div className={styles.icon}><CalendarTodayRoundedIcon /></div>
                    <div className={styles.icon}><LocationCityRoundedIcon /></div>
                    <div className={styles.icon}><PlaceIcon /></div>
                    <div className={styles.icon}><LanguageIcon /></div>
                </div>
                <div className={styles.textContainer}>
                    {array.map(function (name, index) {
                        return <div key={index} className={styles.text}>{name}</div>;
                    })}
                </div>
            </CardActionArea>
        </Card>
    );
 }