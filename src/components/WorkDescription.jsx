import React from "react";
import {
  Typography,
  Box,
  IconButton,
  makeStyles,
  Tooltip,
} from "@material-ui/core";
import PropTypes from "prop-types";
import GitHubIcon from "@material-ui/icons/GitHub";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";

const useStyles = makeStyles((theme) => ({
  customTooltip: {
    fontSize: "15px",
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
      <Typography>キーワード</Typography>
      {data.labels.map((label) => (
        <Typography display="inline" key={label}>
          {label}{" "}
        </Typography>
      ))}
      <Box textAlign="center">
        {data.github && (
          <Tooltip
            classes={{ tooltip: classes.customTooltip }}
            title="GitHub"
            arrow
          >
            <IconButton component="a" href={data.github} target="_blank">
              <GitHubIcon />
            </IconButton>
          </Tooltip>
        )}
        {data.blog && (
          <Tooltip
            classes={{ tooltip: classes.customTooltip }}
            title="Blog"
            arrow
          >
            <IconButton component="a" href={data.blog} target="_blank">
              <LibraryBooksIcon />
            </IconButton>
          </Tooltip>
        )}
      </Box>
    </Box>
  );
};

WorkDescription.propTypes = {
  data: PropTypes.object,
};
