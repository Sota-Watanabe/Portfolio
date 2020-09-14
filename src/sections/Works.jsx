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
  IconButton,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";

import { SectionLabel } from "../components/SectionLabel";
import { worksData } from "../data/works/worksData";

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
        maxWidth="1024px"
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
                    <Chip
                      className={classes.chip}
                      variant="outlined"
                      label={label}
                      key={label}
                    />
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
        <Box mx={3}>
          <Typography variant="h4">{cardDetailData.name}</Typography>
          <Typography>{cardDetailData.description}</Typography>
          <Typography>開発期間</Typography>
          {cardDetailData.period}
          <Typography>使用技術</Typography>
          {cardDetailData.labels.map((label) => (
            <Chip
              variant="outlined"
              className={classes.chip}
              label={label}
              key={label}
            />
          ))}
          <Box textAlign="center">
            <IconButton
              className={classes.iconButton}
              component="a"
              href={cardDetailData.github}
              target="_blank"
            >
              <GitHubIcon />
            </IconButton>
          </Box>
        </Box>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            閉じる
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
