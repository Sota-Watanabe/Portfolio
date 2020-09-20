import React from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    color: "black",
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
      className={classes.root}
    >
      <Typography variant="h1">&nbsp;Sota&nbsp;</Typography>
      <Typography variant="h1">Watanabe.</Typography>
    </Grid>
  );
};
