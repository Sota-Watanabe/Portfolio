import React from "react";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import { makeStyles } from "@material-ui/core";
import grey from "@material-ui/core/colors/grey";

import { SectionLabel } from "../components/SectionLabel";
import { Productions } from "../components/Productions";

const useStyles = makeStyles((theme) => ({
  stack: {
    backgroundColor: grey[300],
  },
}));

export const Works = () => {
  // eslint-disable-next-line no-unused-vars
  const classes = useStyles();
  return (
    <>
      <SectionLabel Icon={FitnessCenterIcon} text="SKILLS" />
      <Productions />
    </>
  );
};
