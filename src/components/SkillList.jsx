import React from "react";
import { Typography, Box, makeStyles, Paper, Grid } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  skillsBox: {
    display: "inline-flex",
    overflowX: "scroll",
  },
  stack: {
    backgroundColor: grey[300],
  },
  stackName: {
    width: "250px",
    margin: "10px",
    textAlign: "center",
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
    <Grid container justify="center" alignItems="center">
      <Typography variant="h4" className={classes.stackName}>
        {name}
      </Typography>
      <Box m={4} className={classes.skillsBox}>
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
    </Grid>
  );
};

SkillList.propTypes = {
  name: PropTypes.string,
  list: PropTypes.array,
};
