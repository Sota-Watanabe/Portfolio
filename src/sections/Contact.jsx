import React from "react";
import EmailIcon from "@material-ui/icons/Email";
import { makeStyles, Box } from "@material-ui/core";
import grey from "@material-ui/core/colors/grey";

import { SectionLabel } from "../components/SectionLabel";

const useStyles = makeStyles((theme) => ({
  iframeWapper: {
    backgroundColor: grey[300],
  },
}));

export const Contact = () => {
  const classes = useStyles();
  return (
    <Box id="contact">
      <SectionLabel Icon={EmailIcon} text="CONTACT" />
      <Box className={classes.iframeWapper}>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeaUGVz2LvOh4IJ8EQNQsPr_S7ULdTzev7ER5EBBBsVUNs4hg/viewform?embedded=true"
          width="100%"
          height="1000"
          backgroundcolor="white"
          frameBorder="0"
          title="Contact Us"
        >
          読み込んでいます…
        </iframe>
      </Box>
    </Box>
  );
};
