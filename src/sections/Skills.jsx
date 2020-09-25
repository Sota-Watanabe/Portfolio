import React from "react";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import { Grid, Box, Container } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

import { SectionLabel } from "../components/SectionLabel";
import { SkillRadar } from "../components/SkillRadar";
import { frontendSkills } from "../data/skills/frontendSkills";
import { backendSkills } from "../data/skills/backendSkills";
import { infraSkills } from "../data/skills/infraSkills";

export const Skills = () => {
  const theme = useTheme();
  return (
    <Box id="skills">
      <SectionLabel Icon={FitnessCenterIcon} text="SKILLS" />
      <Container maxWidth="md">
        <Grid container>
          <Grid item sm={6} xs={12}>
            <SkillRadar
              name="Front-end"
              data={frontendSkills}
              color={theme.palette.skillRadar.frontEnd}
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <SkillRadar
              name="Back-end"
              data={backendSkills}
              color={theme.palette.skillRadar.backEnd}
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <SkillRadar
              name="Infra&amp;DB"
              data={infraSkills}
              color={theme.palette.skillRadar.infra}
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <SkillRadar name="Infra&amp;DB" data={infraSkills} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
