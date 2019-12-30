import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {skills, projects} from '../../constants/index';
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
    table :{
        padding: 50,
    },
    header: {
        backgroundColor: '#1976d2'
    },
    headerText: {
        color: "white",
        fontSize: 20,
        textAlign : "center"
    },
    tableCell: {
        fontSize: 20,
    },
    secondTable: {
        marginTop: 50,
    }
}));

export function renderTableBody(skills){
    const styles = useStyles();
    return (
                <TableBody>
                    {skills.map((each, identity) => {
                        return ( <TableRow key = {identity}>
                            <TableCell  align="center" className={styles.tableCell}>{each.name}</TableCell>
                            <TableCell  align="center" className={styles.tableCell}>{each.description}</TableCell>
                        </TableRow>)
                    })}
                </TableBody>);
}

export function TechnicalSkills() {
    const styles = useStyles();
    return (
        <TableContainer className = {styles.table}>
            <Table aria-label="caption table">
                <TableHead className = {styles.header}>
                    <TableRow>
                        <TableCell align="left" className = {styles.headerText}>AREA</TableCell>
                        <TableCell align="left" className = {styles.headerText}>SKILLS</TableCell>
                    </TableRow>
                </TableHead>
                   {renderTableBody(skills)}
            </Table>
            <Table aria-label="caption table" className = {styles.secondTable}>
                <TableHead className = {styles.header}>
                    <TableRow>
                        <TableCell align="left" className = {styles.headerText}>NAME</TableCell>
                        <TableCell align="left" className = {styles.headerText}>DESCRIPTION</TableCell>
                    </TableRow>
                </TableHead>
                   {renderTableBody(projects)}
            </Table>
        </TableContainer>
    )
}