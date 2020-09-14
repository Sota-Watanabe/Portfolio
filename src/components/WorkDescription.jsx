import React from "react";
import { Typography, Box, IconButton } from "@material-ui/core";
import PropTypes from "prop-types";
import GitHubIcon from "@material-ui/icons/GitHub";

export const WorkDescription = ({ data }) => {
  return (
    <Box mx={3}>
      <Typography variant="h4">{data.name}</Typography>
      {data.description.split("\n").map((text, index) => {
        return <Typography key={index}>{text}</Typography>;
      })}
      <Typography>開発期間</Typography>
      {data.period}
      <Typography>キーワード</Typography>
      {data.labels.map((label) => (
        <Typography display="inline" key={label}>
          {label}{" "}
        </Typography>
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
