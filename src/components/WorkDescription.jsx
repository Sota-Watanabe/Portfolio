import React from "react";
import { Typography, Box } from "@material-ui/core";
import PropTypes from "prop-types";
import GitHubIcon from "@material-ui/icons/GitHub";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import WebIcon from "@material-ui/icons/Web";
import { IconLink } from "./IconLink";

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
        {data.github && (
          <IconLink Icon={GitHubIcon} title="GitHub" link={data.github} />
        )}

        {data.blog && (
          <IconLink Icon={LibraryBooksIcon} title="Blog" link={data.blog} />
        )}
        {data.website && (
          <IconLink Icon={WebIcon} title="website" link={data.website} />
        )}
      </Box>
    </Box>
  );
};

WorkDescription.propTypes = {
  data: PropTypes.object,
};
