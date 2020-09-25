import React from "react";
import {
  Grid,
  Typography,
  makeStyles,
  Grow,
  IconButton,
} from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { Link } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  downIcon: {
    animationName: "$huyohuyo",
    animationTimingFunction: "ease-in-out",
    animationIterationCount: "infinite",
    animationDirection: "alternate",
    animationDuration: "1.5s",
  },
  "@keyframes huyohuyo": {
    "0%": {
      transform: "translate(0,0px)",
    },
    "100%": {
      transform: "translate(0,-15px)",
    },
  },
}));

export const KeyVisual = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      alignContent="center"
      alignItems="center"
      justify="center"
      color="primary"
      direction="column"
      className={classes.root}
    >
      <Typography
        style={{ marginTop: "10%", marginBottom: "10%" }}
        variant="h1"
      >
        Sota Watanabe.
      </Typography>
      <Grow in {...{ timeout: 5000 }}>
        <IconButton
          className={classes.downIcon}
          component={Link}
          to="about"
          smooth={true}
          offset={-100}
          duration={600}
          activeClass="active"
        >
          <KeyboardArrowDownIcon style={{ fontSize: 50 }} />
        </IconButton>
      </Grow>
    </Grid>
  );
};
