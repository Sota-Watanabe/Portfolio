import React from "react";
import {
  Grid,
  Typography,
  Box,
  Tooltip,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles((theme) => ({
  customTooltip: {
    fontSize: "15px",
  },
}));

export const KeyVisual = () => {
  const classes = useStyles();
  return (
    <Box m={2} mb={16}>
      <Grid container alignItems="center" justify="center">
        <Typography variant="h2">そーたの</Typography>
        <Typography variant="h2">Portfolio</Typography>
      </Grid>
      <Tooltip
        classes={{ tooltip: classes.customTooltip }}
        title="github"
        arrow
      >
        <IconButton aria-label="delete">
          <GitHubIcon fontSize="large" />
        </IconButton>
      </Tooltip>
    </Box>
  );
};
