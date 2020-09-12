import React from "react";
import EmailIcon from "@material-ui/icons/Email";
import { makeStyles, Grid, Box, Typography } from "@material-ui/core";
import grey from "@material-ui/core/colors/grey";

import { SectionLabel } from "../components/SectionLabel";

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundColor: grey[700],
    padding: "50px 0",
  },
}));

export const Contact = () => {
  const classes = useStyles();
  return (
    <Box id="contact">
      <SectionLabel Icon={EmailIcon} text="CONTACT" />
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.section}
      >
        <Box m={4} my={8}>
          <Typography variant="h3">現在制作中</Typography>
        </Box>
      </Grid>
    </Box>
  );
};
