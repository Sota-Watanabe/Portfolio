import React from "react";
import EmailIcon from "@material-ui/icons/Email";
import {
  makeStyles,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { SectionLabel } from "../components/SectionLabel";

const useStyles = makeStyles((theme) => ({
  heading: {
    /* ExpandMoreIcon分ずらさないと中央にこない */
    paddingLeft: "48px",
    margin: "auto",
  },
}));

export const Contact = () => {
  const classes = useStyles();
  return (
    <Box id="contact">
      <SectionLabel Icon={EmailIcon} text="CONTACT" />
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Google formを開く</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSeaUGVz2LvOh4IJ8EQNQsPr_S7ULdTzev7ER5EBBBsVUNs4hg/viewform?embedded=true"
            width="100%"
            height="1000"
            frameBorder="0"
            title="Contact Us"
          >
            読み込んでいます…
          </iframe>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
