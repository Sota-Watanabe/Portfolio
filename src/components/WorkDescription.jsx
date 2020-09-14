import React from "react";
import {
  Typography,
  Box,
  makeStyles,
  Chip,
  IconButton,
} from "@material-ui/core";
import PropTypes from "prop-types";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles((theme) => ({
  chip: {
    margin: theme.spacing(0.5),
  },
}));

export const WorkDescription = ({ data }) => {
  const classes = useStyles();
  return (
    <Box mx={3}>
      <Typography variant="h4">{data.name}</Typography>
      {data.description.split("\n").map((text, index) => {
        return <Typography key={index}>{text}</Typography>;
      })}
      <Typography>開発期間</Typography>
      {data.period}
      <Typography>使用技術</Typography>
      {data.labels.map((label) => (
        <Chip
          variant="outlined"
          className={classes.chip}
          label={label}
          key={label}
        />
      ))}
      <Box textAlign="center">
        <IconButton component="a" href={data.github} target="_blank">
          <GitHubIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

WorkDescription.propTypes = {
  data: PropTypes.object,
};
