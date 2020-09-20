import React from "react";
import { Typography, makeStyles, Box } from "@material-ui/core";
import PropTypes from "prop-types";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacingsub,
  },
  mainTitle: {
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: "16px",
    color: grey[500],
  },
}));

export const DetailHeader = ({ MainTitle, subTitle }) => {
  const classes = useStyles();
  return (
    <Box mt={4} mb={2}>
      <Typography variant="h3" className={classes.mainTitle}>
        {MainTitle}
      </Typography>
      <Typography className={classes.subTitle}>{subTitle}</Typography>
    </Box>
  );
};

DetailHeader.propTypes = {
  MainTitle: PropTypes.string,
  subTitle: PropTypes.string,
};
