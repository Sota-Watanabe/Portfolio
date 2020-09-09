import React from "react";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import {
  Avatar,
  makeStyles,
  Grid,
  Box,
  Table,
  TableRow,
  TableBody,
  TableContainer,
  Paper,
  TableCell,
} from "@material-ui/core";
import grey from "@material-ui/core/colors/grey";

import SotaIllust from "../static/images/face_illust.png";
import { SectionLabel } from "../components/SectionLabel";

const useStyles = makeStyles((theme) => ({
  faceImage: {
    width: "300px",
    height: "300px",
  },
  section: {
    backgroundColor: grey[700],
    padding: "50px 0",
  },
}));

const createData = (key, value) => {
  return { key, value };
};

const profileData = [
  createData("名前", "渡辺 爽太 (わたなべ そうた)"),
  createData("生年月日", "1998-02-22"),
  createData("出身", "千葉県"),
  createData("所属", "芝浦工業大学 大学院 理工学研究科 電気電子情報工学専攻"),
  createData("研究室", "コンピューティングデザイン研究室"),
];

export const About = () => {
  const classes = useStyles();
  return (
    <>
      <SectionLabel Icon={EmojiPeopleIcon} text="ABOUT" />
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.section}
      >
        <Avatar alt="Sota" src={SotaIllust} className={classes.faceImage} />
        <Box m={4} my={8}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableBody>
                {profileData.map((data) => (
                  <TableRow key={data.key}>
                    <TableCell component="th" scope="row">
                      {data.key}
                    </TableCell>
                    <TableCell align="right">{data.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Grid>
    </>
  );
};
