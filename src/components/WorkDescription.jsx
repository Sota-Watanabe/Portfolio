import React from "react";
import { Typography, Box, makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import GitHubIcon from "@material-ui/icons/GitHub";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import WebIcon from "@material-ui/icons/Web";
import { IconLink } from "./IconLink";

const useStyles = makeStyles((theme) => ({
  title: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: theme.spacing(2),
    "&:after": {
      borderTop: "1px solid",
      content: '""',
      width: "1em",
      marginLeft: "1em",
    },
    "&:before": {
      borderTop: "1px solid",
      content: '""',
      width: "1em",
      marginRight: "1em",
    },
  },
  heading: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(0.5),
  },
}));

export const WorkDescription = ({ data }) => {
  const classes = useStyles();
  return (
    <>
      <img width="100%" src={data.imgPath} alt={data.name} />
      <Typography variant="h3" className={classes.title}>
        {data.name}
      </Typography>
      <Box mx={3}>
        <Box my={2}>
          <Typography variant="h4" className={classes.heading}>
            説明
          </Typography>
          {data.description.split("\n").map((text, index) => {
            return <Typography key={index}>{text}</Typography>;
          })}
        </Box>
        <Box my={2}>
          <Typography variant="h4" className={classes.heading}>
            開発期間
          </Typography>
          {data.period}
        </Box>
        <Box>
          <Typography variant="h4" className={classes.heading}>
            キーワード
          </Typography>
          {data.labels.map((label) => (
            <Typography display="inline" key={label}>
              {label}{" "}
            </Typography>
          ))}
        </Box>
        <Box my={2} textAlign="center">
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
    </>
  );
};

WorkDescription.propTypes = {
  data: PropTypes.object,
};
