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

const onClickCard = (event) => {
  const cardIndex = event.currentTarget.getAttribute("index");
  console.log(cardIndex);
};

export const Works = () => {
  const classes = useStyles();
  return (
    <Box id="works">
      <SectionLabel Icon={AssignmentTurnedInIcon} text="WORKS" />
      <Box
        m="auto"
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        maxWidth="1024px"
      >
        {worksData.map((work, index) => (
          <Card
            className={classes.workCard}
            index={index}
            key={work.name}
            onClick={onClickCard}
          >
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
    </Box>
  );
};
