import React from 'react';
import {useStyles, renderTableBody} from './TechnicalSkills';
import {experience} from '../../constants/index';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from "@material-ui/core/styles";
import { ProjectsWorked } from './Projects';

export const useMyStyles = makeStyles(theme => ({
    table :{
        width: '90%',
        padding: 50
    },
}));

export function WorkExperience(){
    const styles = useStyles();
    const classes = useMyStyles();
    return (
        <div>
        <TableContainer className = {classes.table}>
        <Table aria-label="caption table">
            <TableHead className = {styles.header}>
                <TableRow>
                    <TableCell align="left" className = {styles.headerText}>NAME OF THE COMPANY</TableCell>
                    <TableCell align="left" className = {styles.headerText}>ROLE</TableCell>
                    <TableCell align="left" className = {styles.headerText}>DURATION</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                    {experience.map((each, identity) => {
                        return ( <TableRow key = {identity}>
                            <TableCell  align="center" className={styles.tableCell}>{each.name}</TableCell>
                            <TableCell  align="center" className={styles.tableCell}>{each.role}</TableCell>
                            <TableCell  align="center" className={styles.tableCell}>{each.duration}</TableCell>
                        </TableRow>)
                    })}
                </TableBody>
        </Table>
        </TableContainer>
        <ProjectsWorked />
        </div>
    )
}