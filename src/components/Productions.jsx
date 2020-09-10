import React from "react";
import {
  Typography,
  Box,
  makeStyles,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import PropTypes from "prop-types";
import pictureCollector from "../static/images/picture_collector.png";

const useStyles = makeStyles((theme) => ({
  workCard: {
    width: "400px",
    margin: "10px",
  },
  media: {
    height: "200px",
  },
}));

export const Productions = () => {
  const classes = useStyles();
  return (
    <Box m={4} display="flex" flexWrap="wrap" justifyContent="center">
      <Card className={classes.workCard}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={pictureCollector}
            title="ピクコレ"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              ピクコレ
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              ゴールデンウィークに作ったもの. 作った slack bot
              に画像をアップロードすると サーバに保存され,
              デジタルフォトフレームのスライドショーに追加される.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className={classes.workCard}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={pictureCollector}
            title="ピクコレ"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              ピクコレ
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              ゴールデンウィークに作ったもの. 作った slack bot
              に画像をアップロードすると サーバに保存され,
              デジタルフォトフレームのスライドショーに追加される.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className={classes.workCard}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={pictureCollector}
            title="ピクコレ"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              ピクコレ
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              ゴールデンウィークに作ったもの. 作った slack bot
              に画像をアップロードすると サーバに保存され,
              デジタルフォトフレームのスライドショーに追加される.ああああああああああああああああああああああああああああああ
              あ
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

Productions.propTypes = {
  name: PropTypes.string,
  list: PropTypes.array,
};
