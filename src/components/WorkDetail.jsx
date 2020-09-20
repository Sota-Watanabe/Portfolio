import React from "react";
import { Typography, Box, makeStyles, Grid } from "@material-ui/core";
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
      marginLeft: "0.5em",
    },
    "&:before": {
      borderTop: "1px solid",
      content: '""',
      width: "1em",
      marginRight: "0.5em",
    },
  },
  heading: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
}));

export const WorkDetail = ({ data }) => {
  const classes = useStyles();
  return (
    <Grid container spaceing={1}>
      <Grid item md={6}>
        <Typography variant="h2" className={classes.title}>
          {data.name}
        </Typography>
        <Box mx={3}>
          <Box my={2}>
            <Typography variant="h3" className={classes.heading}>
              Description
            </Typography>
            {data.description.split("\n").map((text, index) => {
              return <Typography key={index}>{text}</Typography>;
            })}
          </Box>
          <Box my={2}>
            <Typography variant="h3" className={classes.heading}>
              Period
            </Typography>
            {data.period}
          </Box>
          <Box>
            <Typography variant="h3" className={classes.heading}>
              Keyword
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
      </Grid>
      <Grid item md={6}>
        <Box my={10}>
          <img width="100%" height="auto" src={data.imgPath} alt={data.name} />
        </Box>
      </Grid>
    </Grid>
  );
};

WorkDetail.propTypes = {
  data: PropTypes.object,
};