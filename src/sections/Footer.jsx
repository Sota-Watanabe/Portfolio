import React from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.typography.body2,
  },
}));

export const Footer = () => {
  const classes = useStyles();
  return (
    <Box textAlign="center" m={3}>
      <Typography className={classes.root}>
        Copyright©2020. Sota Watanabe.
      </Typography>
    </Box>
  );
};
