import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import PropTypes from "prop-types";

export const SectionLabel = ({ Icon, text }) => {
  return (
    <Box m={10} mb={5}>
      <Grid m={2} container justify="center">
        <Icon m={10} style={{ fontSize: 50 }} />
        <Typography variant="h2">{text}</Typography>
      </Grid>
    </Box>
  );
};

SectionLabel.propTypes = {
  Icon: PropTypes.object,
  text: PropTypes.string,
};
