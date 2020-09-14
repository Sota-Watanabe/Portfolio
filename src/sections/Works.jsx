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
  DialogActions,
  Button,
  Chip,
} from "@material-ui/core";

import { SectionLabel } from "../components/SectionLabel";
import { worksData } from "../data/works/worksData";

const useStyles = makeStyles((theme) => ({
  workCard: {
    width: "330px",
    // height: "200px",
    margin: "5px",
  },
  media: {
    height: "180px",
  },
  chip: {
    margin: theme.spacing(0.5),
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
      <Box
        m="auto"
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        // maxWidth="1024px"
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
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {work.name}
                </Typography>
                <Box>
                  {work.labels.map((label) => (
                    <Chip className={classes.chip} label={label} key={label} />
                  ))}
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
      {/* 以下はポップアップ */}
      <Dialog
        open={openDetail}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <img
          width="100%"
          src={cardDetailData.imgPath}
          alt={cardDetailData.name}
        />
        <Typography>{cardDetailData.name}</Typography>
        <Typography>{cardDetailData.description}</Typography>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            閉じる
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
