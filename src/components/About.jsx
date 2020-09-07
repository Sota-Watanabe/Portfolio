import React from "react";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import { Avatar, makeStyles } from "@material-ui/core";
import SotaIllust from "../static/images/face_illust.png";
import { SectionLabel } from "./SectionLabel";

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
      <SectionLabel Icon={EmojiPeopleIcon} text="ABOUT" />
      <Avatar alt="Sota" src={SotaIllust} className={classes.faceImage} />
    </>
  );
};
