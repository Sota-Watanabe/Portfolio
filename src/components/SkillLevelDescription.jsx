import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PropTypes from "prop-types";
import { skillLevelDescription } from "../data/skills/skillLevelDescription";

export const SkillLevelDescription = () => {
  return (
    <>
      <Container
        maxWidth="sm"
        style={{ marginTop: "100px", marginBottom: "100px" }}
      >
        <Typography
          variant="h3"
          style={{ margin: "30px", textAlign: "center" }}
        >
          Skill Level
        </Typography>
        {skillLevelDescription.map((description, index) => {
          return (
            <Accordion key={description.SkillLevel}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Container
                  maxWidth="xs"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <description.Icon style={{ marginRight: "20px" }} />
                  <Typography display="inline">
                    {description.SkillLevel}
                  </Typography>
                </Container>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{description.Detail}</Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Container>
    </>
  );
};

SkillLevelDescription.propTypes = {
  name: PropTypes.string,
  data: PropTypes.array,
  color: PropTypes.string,
};
