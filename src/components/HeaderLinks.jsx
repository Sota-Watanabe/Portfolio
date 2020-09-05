import React from "react";
import { Button, Grid } from "@material-ui/core";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import EmailIcon from "@material-ui/icons/Email";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";

export const HeaderLinks = () => {
  return (
    <Grid container>
      <Grid container item xs={6} sm={3} justify="center">
        <Button size="large" startIcon={<EmojiPeopleIcon />}>
          about
        </Button>
      </Grid>
      <Grid container item xs={6} sm={3} justify="center">
        <Button size="large" startIcon={<FitnessCenterIcon />}>
          skills
        </Button>
      </Grid>
      <Grid container item xs={6} sm={3} justify="center">
        <Button size="large" startIcon={<AssignmentTurnedInIcon />}>
          works
        </Button>
      </Grid>
      <Grid container item xs={6} sm={3} justify="center">
        <Button size="large" startIcon={<EmailIcon />}>
          contact
        </Button>
      </Grid>
    </Grid>
  );
};
