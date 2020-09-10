import React from "react";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import { makeStyles, Grid } from "@material-ui/core";
import grey from "@material-ui/core/colors/grey";

import { SectionLabel } from "../components/SectionLabel";
import { SkillList } from "../components/SkillList";
import { frontendSkills } from "../data/skills/frontendSkills";

const useStyles = makeStyles((theme) => ({
  stack: {
    backgroundColor: grey[300],
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
        <SkillList name="フロントエンド" list={frontendSkills} />
        <SkillList name="バックエンド" list={frontendSkills} />
        <SkillList name="インフラ" list={frontendSkills} />
      </Grid>
    </>
  );
};
