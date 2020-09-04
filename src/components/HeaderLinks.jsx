import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid } from "@material-ui/core";
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import EmailIcon from '@material-ui/icons/Email';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';

const useStyles = makeStyles({
  button: {
    // margin: "auto"
  },
});

export const HeaderLinks = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={3} >
      <Grid container item xs={3} justify="center">
        <Button
          size="large"
          className={classes.button}
          startIcon={<EmojiPeopleIcon />}
        >
          about
        </Button>
      </Grid>
      <Grid container item xs={3} justify="center">
        <Button
          size="large"
          className={classes.button}
          startIcon={<FitnessCenterIcon />}
        >
          skills
        </Button>
      </Grid>
      <Grid container item xs={3} justify="center">
        <Button
          size="large"
          className={classes.button}
          startIcon={<AssignmentTurnedInIcon />}
        >
          works
        </Button>
      </Grid>
      <Grid container item xs={3} justify="center">
        <Button
          size="large"
          className={classes.button}
          startIcon={<EmailIcon />}
        >
          contact
        </Button>
      </Grid>
    </Grid>
  );
};
