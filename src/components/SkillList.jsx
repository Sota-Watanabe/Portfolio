import React from "react";
import { Typography, Box, makeStyles, Paper } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "inline-flex",
    overflowX: "scroll",
    width: "70%",
  },
  stack: {
    backgroundColor: grey[300],
  },
  stackName: {
    margin: "10px",
  },
  section: {
    backgroundColor: grey[700],
    padding: "50px 0",
  },
  paper: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
    maxWidth: "80%",
    margin: "10px",
  },
}));

export const SkillList = ({ name, list }) => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h4" display="inline" className={classes.stackName}>
        {name}
      </Typography>
      <Box display="inline" className={classes.root}>
        {list.map((skill) => (
          <Paper
            className={classes.paper}
            key={skill.imgPath}
            elevation={3}
            variant="outlined"
          >
            <img
              src={skill.imgPath}
              alt={skill.name}
              width="100px"
              height="100px"
            />
          </Paper>
        ))}
      </Box>
    </>
  );
};

SkillList.propTypes = {
  name: PropTypes.string,
  list: PropTypes.array,
};
