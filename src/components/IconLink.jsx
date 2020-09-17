import React from "react";
import { IconButton, makeStyles, Tooltip } from "@material-ui/core";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  customTooltip: {
    fontSize: "15px",
  },
}));

export const IconLink = ({ Icon, title, link }) => {
  const classes = useStyles();
  return (
    <Tooltip classes={{ tooltip: classes.customTooltip }} title={title} arrow>
      <IconButton component="a" href={link} target="_blank">
        <Icon fontSize="large" />
      </IconButton>
    </Tooltip>
  );
};

IconLink.propTypes = {
  Icon: PropTypes.object,
  link: PropTypes.string,
  title: PropTypes.string,
};
