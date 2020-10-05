import React from "react";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import { Grid, Box, Container, Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

import { SectionLabel } from "../components/SectionLabel";
import { SkillRadar } from "../components/SkillRadar";
import { frontendSkills } from "../data/skills/frontendSkills";
import { backendSkills } from "../data/skills/backendSkills";
import { infraSkills } from "../data/skills/infraSkills";
import { os } from "../data/skills/os";
import { SkillLevelDescription } from "../components/SkillLevelDescription";

export const Skills = () => {
  const theme = useTheme();
  return (
    <Box id="skills">
      <SectionLabel Icon={FitnessCenterIcon} text="SKILLS" />
      <Box marginX="20%">
        <Typography variant="body1">
          今まで僕が学んだ技術を紹介します。その際にここでは「スキルレベル」を利用しています。レベルの詳細はプルダウンに記述しておくので気になる方はご覧ください。
        </Typography>
      </Box>
      <SkillLevelDescription />
      <Box style={{ backgroundColor: "white", paddingTop: theme.spacing(4) }}>
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
              <SkillRadar name="OS" data={os} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};
