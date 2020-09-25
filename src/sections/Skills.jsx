import React from "react";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import { Grid, Box, Container } from "@material-ui/core";

import { SectionLabel } from "../components/SectionLabel";
import { SkillRadar } from "../components/SkillRadar";
import { frontendSkills } from "../data/skills/frontendSkills";
import { backendSkills } from "../data/skills/backendSkills";
import { infraSkills } from "../data/skills/infraSkills";
export const Skills = () => {
  return (
    <Box id="skills">
      <SectionLabel Icon={FitnessCenterIcon} text="SKILLS" />
      <Container maxWidth="md">
        <Grid container>
          <Grid item sm={6} xs={12}>
            <SkillRadar name="Front-end" data={frontendSkills} color="pink" />
          </Grid>
          <Grid item sm={6} xs={12}>
            <SkillRadar name="Back-end" data={backendSkills} />
          </Grid>
          <Grid item sm={6} xs={12}>
            <SkillRadar name="Infra&amp;DB" data={infraSkills} />
          </Grid>
          <Grid item sm={6} xs={12}>
            <SkillRadar name="Infra&amp;DB" data={infraSkills} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
