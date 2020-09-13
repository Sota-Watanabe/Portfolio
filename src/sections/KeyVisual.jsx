import React from "react";
import { Grid, Typography, Box, makeStyles } from "@material-ui/core";
import grey from "@material-ui/core/colors/grey";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: grey[900],
  },
  title: {
    color: "white",
  },
}));

export const KeyVisual = () => {
  const classes = useStyles();
  return (
    <Box m={2} mb={16} className={classes.root}>
      <Grid container alignItems="center" justify="center">
        <Typography className={classes.title} variant="h2">
          そーたの
        </Typography>
        <Typography className={classes.title} variant="h2">
          Portfolio
        </Typography>
      </Grid>
    </Box>
  );
};
