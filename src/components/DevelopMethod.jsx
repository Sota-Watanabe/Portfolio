import React from "react";
import { Box, Grid, makeStyles, Typography } from "@material-ui/core";

import GroupAddIcon from "@material-ui/icons/GroupAdd";
import PersonIcon from "@material-ui/icons/Person";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  devMethod: {
    color: theme.palette.primary.light,
  },
}));

export const DevelopMethod = ({ teamDev }) => {
  const classes = useStyles();
  let Icon = GroupAddIcon;
  let text = "チーム開発";
  if (!teamDev) {
    Icon = PersonIcon;
    text = "個人開発";
  }
  return (
    <Grid container justify="flex-end" alignItems="center">
      <Icon fontSize="large" />
      <Box m={0.5} />
      <Typography display="inline" variant="h4" className={classes.devMethod}>
        {text}
      </Typography>
    </Grid>
  );
};

DevelopMethod.propTypes = {
  teamDev: PropTypes.bool,
};
