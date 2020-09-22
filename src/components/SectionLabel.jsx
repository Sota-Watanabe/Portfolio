import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import PropTypes from "prop-types";

export const SectionLabel = ({ Icon, text }) => {
  return (
    <Box mt={20} mb={10}>
      <Grid m={2} container justify="center">
        <Icon style={{ fontSize: 50 }} />
        <Box m={0.5} />
        <Typography variant="h2">{text}</Typography>
      </Grid>
    </Box>
  );
};

SectionLabel.propTypes = {
  Icon: PropTypes.object,
  text: PropTypes.string,
};
