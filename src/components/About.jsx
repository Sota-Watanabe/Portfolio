import React from "react";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import { Grid, Typography, Box, Avatar, makeStyles } from "@material-ui/core";
import SotaIllust from "../static/images/face_illust.png";

const useStyles = makeStyles((theme) => ({
  faceImage: {
    margin: "100px",
    width: "300px",
    height: "300px",
  },
}));

export const About = () => {
  const classes = useStyles();
  return (
    <>
      <Box m={4}>
        <Grid m={2} container alignItems="center" justify="center">
          <EmojiPeopleIcon style={{ fontSize: 50 }} />
          <Typography variant="h4">ABOUT</Typography>
        </Grid>
      </Box>
      <Avatar alt="Sota" src={SotaIllust} className={classes.faceImage} />
    </>
  );
};
