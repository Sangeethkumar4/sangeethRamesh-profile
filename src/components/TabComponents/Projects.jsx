import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { projectsWorked } from '../../constants/index';
import cloneDeep from 'clone-deep';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

const useStyles = makeStyles(theme => ({
  root: {
    width: '90%',
    padding: 50
  },
  expansionPanel: {
      padding: 20,
      color: "#1976d2",
  },
  expansionPanelSumm: {
    borderBottom: "2px solid #1976d2",
  },
  projectName: {
    float: "left",
    fontWeight: "bold",
    fontSize: 20
  },
  duration: {
    paddingLeft : "20px",
    fontWeight: "bold",
    fontSize: 20
  },
  expansionPanelDetails: {
      display: "inline-block"
  },
  description: {
    paddingLeft: "100px",
    fontSize: 20
  },
  toolsText: {
    borderBottom: "1px solid",
    width: "max-content",
    textTransform: "uppercase",
    paddingTop: "10px",
    fontWeight: "bold",
    fontSize: "20px"
  },
  tools: {
    paddingLeft: "100px",
    paddingTop: "10px",
    fontSize: "20px"
  }
}));

export function ProjectsWorked() {
  const classes = useStyles();
  const [projects, setExpanded] = React.useState(cloneDeep(projectsWorked));
  console.log('printing projects', projects);

  const handleChange = index => (event) => {
      setExpanded(prevState => {
          prevState[index].isExpanded = !prevState[index].isExpanded
          return cloneDeep(prevState);
      }
      );
  };

    return (
        <div className={classes.root}>
            {projects.map((project, index) => {
                return (
                    <Card key={index}>
                        <ExpansionPanel expanded={project.isExpanded} onChange={handleChange(index)} className={classes.expansionPanel}>
                            <CardActionArea>
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                    className={classes.expansionPanelSumm}
                                >
                                    <div className={classes.projectName}>{project.name}</div>
                                    <div className={classes.duration}>{project.duration}</div>
                                </ExpansionPanelSummary>
                            </CardActionArea>
                            <ExpansionPanelDetails className={classes.expansionPanelDetails}>
                                <div className={classes.description}>
                                    {project.description}
                                </div>
                                <div className={classes.toolsText}>Tools and Technologies used:</div>
                                <div className={classes.tools}>{project.tools}</div>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </Card>)
            })}
        </div>
    );
}