import React from "react";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import {
  makeStyles,
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";

import { SectionLabel } from "../components/SectionLabel";
import { worksData } from "../data/works/worksData";

const useStyles = makeStyles((theme) => ({
  workCard: {
    width: "300px",
    margin: "10px",
  },
  media: {
    height: "150px",
  },
}));

export const Works = () => {
  const classes = useStyles();
  return (
    <>
      <SectionLabel Icon={AssignmentTurnedInIcon} text="WORKS" />
      <Box m={4} display="flex" flexWrap="wrap" justifyContent="center">
        {worksData.map((work) => (
          <Card className={classes.workCard} key={work.name}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={`${process.env.PUBLIC_URL}${work.imgPath}`}
                title={work.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {work.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {work.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </>
  );
};
