import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import { education } from '../../constants/index'
import Table from '@material-ui/core/Table';
import { renderTableBody } from './TechnicalSkills';

const useStyles = makeStyles(theme => ({
    table: {
        width: "70%"
    }
}));

function getSteps() {
  return ["2017", "2013", "2011"];
}

export function Education() {
  const classes = useStyles();
  const steps = getSteps();

    return (
        <div>
            <Stepper activeStep={3} orientation="vertical">
                {education.map((each, identity) => {
                    return(<Step key={identity} className={classes.step} active={true}>
                        <StepLabel>{each.key}</StepLabel>
                        <StepContent>
                            <Table key={identity} className = {classes.table}>
                                {renderTableBody(each.details)}
                            </Table>
           </StepContent>
                    </Step>)
                })}
            </Stepper>
        </div>
    );
}
