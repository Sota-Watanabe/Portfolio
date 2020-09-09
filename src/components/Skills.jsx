import React from "react";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import {
  makeStyles,
  Box,
  Paper,
  Container,
  Typography,
  Grid,
} from "@material-ui/core";
import grey from "@material-ui/core/colors/grey";
import { SectionLabel } from "./SectionLabel";
import { languages } from "../static/skills/language";
import { typography } from "material-ui/styles";
import { SkillList } from "./SkillList";

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

export const Skills = () => {
  const classes = useStyles();
  return (
    <>
      <SectionLabel Icon={FitnessCenterIcon} text="SKILLS" />
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.stack}
      >
        <SkillList name="フロントエンド" list={languages} />
        <SkillList name="バックエンド" list={languages} />
        <SkillList name="インフラ" list={languages} />
      </Grid>
    </>
  );
};
