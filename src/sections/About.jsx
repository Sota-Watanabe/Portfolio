import React from "react";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import { Avatar, makeStyles, Grid, Box, Typography } from "@material-ui/core";
import { SectionLabel } from "../components/SectionLabel";
import { AboutLinks } from "../components/AboutLinks";
import { aboutData } from "../data/about/aboutData";
import { DetailHeader } from "../components/DetailHeader";

const useStyles = makeStyles((theme) => ({
  faceImage: {
    width: "200px",
    height: "200px",
  },
}));

export const About = () => {
  const classes = useStyles();
  return (
    <Box id="about" mt={20}>
      <SectionLabel Icon={EmojiPeopleIcon} text="ABOUT" />
      <Grid
        container
        justify="center"
        alignItems="center"
        style={{ backgroundColor: "white" }}
      >
        <Avatar
          alt="Sota"
          src={`${process.env.PUBLIC_URL}/images/face_illust.png`}
          className={classes.faceImage}
        />
        <Box mx={8} maxWidth="420px">
          <DetailHeader MainTitle="Who am I ？" subTitle="自己紹介" />
          {aboutData.split("\n").map((text, index) => {
            return (
              <Box key={index} my={4}>
                <Typography>{text}</Typography>
              </Box>
            );
          })}
        </Box>
      </Grid>
      <AboutLinks />
    </Box>
  );
};
