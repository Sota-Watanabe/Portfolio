import React from "react";
import { Typography, Box, makeStyles, Paper, Grid } from "@material-ui/core";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  skillsBox: {
    overflowX: "scroll",
    maxWidth: "530px",
  },
  stackName: {
    width: "250px",
    margin: "10px",
    textAlign: "center",
  },
  paper: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
    height: "100px",
    margin: "10px",
  },
}));

export const SkillList = ({ name, list }) => {
  const classes = useStyles();
  return (
    <Grid container justify="center" alignItems="center">
      <Typography variant="h2" className={classes.stackName}>
        {name}
      </Typography>
      <Box m={4} display="flex" className={classes.skillsBox}>
        {list.map((skill) => (
          <Paper
            className={classes.paper}
            key={skill.name}
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
