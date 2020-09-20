import React from "react";
import { Button, Grid, makeStyles } from "@material-ui/core";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import EmailIcon from "@material-ui/icons/Email";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import { Link } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  button: {
    ...theme.typography.subtitle1,
  },
}));

export const HeaderLinks = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid container item xs={6} sm={3} justify="center">
        <Button
          className={classes.button}
          variant="text"
          component={Link}
          to="about"
          smooth={true}
          offset={-100}
          duration={600}
          activeClass="active"
          size="large"
          startIcon={<EmojiPeopleIcon />}
        >
          ABOUT
        </Button>
      </Grid>
      <Grid container item xs={6} sm={3} justify="center">
        <Button
          className={classes.button}
          component={Link}
          to="skills"
          smooth={true}
          offset={-100}
          duration={600}
          activeClass="active"
          size="large"
          startIcon={<FitnessCenterIcon />}
        >
          SKILLS
        </Button>
      </Grid>
      <Grid container item xs={6} sm={3} justify="center">
        <Button
          className={classes.button}
          component={Link}
          to="works"
          smooth={true}
          offset={-100}
          duration={600}
          activeClass="active"
          size="large"
          startIcon={<AssignmentTurnedInIcon />}
        >
          WORKS
        </Button>
      </Grid>
      <Grid container item xs={6} sm={3} justify="center">
        <Button
          className={classes.button}
          component={Link}
          to="contact"
          smooth={true}
          offset={-100}
          duration={600}
          activeClass="active"
          size="large"
          startIcon={<EmailIcon />}
        >
          CONTACT
        </Button>
      </Grid>
    </Grid>
  );
};
