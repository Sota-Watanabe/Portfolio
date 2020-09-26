import React, { useState, forwardRef } from "react";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import {
  makeStyles,
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Slide,
  Dialog,
  Button,
  Container,
} from "@material-ui/core";

import { SectionLabel } from "../components/SectionLabel";
import { worksData } from "../data/works/worksData";
import { WorkDetail } from "../components/WorkDetail";
import { DevelopMethod } from "../components/DevelopMethod";

const useStyles = makeStyles((theme) => ({
  workCard: {
    width: "320px",
    margin: "10px",
  },
  media: {
    height: "180px",
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  closeButton: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    width: "100%",
  },
}));

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const Works = () => {
  const [openDetail, setOpenDetail] = useState(false);
  const [cardIndex, setCardIndex] = useState(0);

  const handleClickOpenDetail = (event) => {
    const cardIndex = event.currentTarget.getAttribute("index");
    setCardIndex(cardIndex);
    setOpenDetail(true);
  };

  const handleClose = () => {
    setOpenDetail(false);
  };

  const classes = useStyles();
  const cardDetailData = worksData[cardIndex];
  return (
    <Box id="works">
      <SectionLabel Icon={AssignmentTurnedInIcon} text="WORKS" />
      <Container>
        <Box
          mx="auto"
          my={12}
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
        >
          {worksData.map((work, index) => (
            <Card
              className={classes.workCard}
              index={index}
              key={work.name}
              onClick={handleClickOpenDetail}
            >
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={`${process.env.PUBLIC_URL}${work.imgPath}`}
                  title={work.name}
                />
                <CardContent className={classes.cardContent}>
                  <Typography variant="h3" gutterBottom>
                    {work.name}
                  </Typography>
                  <DevelopMethod teamDev={work.teamDev} />
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      </Container>
      {/* 以下はポップアップ */}
      <Dialog
        maxWidth="xl"
        open={openDetail}
        TransitionComponent={Transition}
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <WorkDetail data={cardDetailData} />
        {/* safari対応するためBox追加 */}
        <Box>
          <Button
            onClick={handleClose}
            className={classes.closeButton}
            color="primary"
            variant="contained"
            style={{ borderRadius: 0 }}
          >
            <Typography variant="h3">CLOSE</Typography>
          </Button>
        </Box>
      </Dialog>
    </Box>
  );
};
