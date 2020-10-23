import React from "react";
import {
  Typography,
  Box,
  makeStyles,
  Grid,
  CardMedia,
  Hidden,
} from "@material-ui/core";
import PropTypes from "prop-types";
import GitHubIcon from "@material-ui/icons/GitHub";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import WebIcon from "@material-ui/icons/Web";
import { IconLink } from "./IconLink";
import { DetailHeader } from "./DetailHeader";

const useStyles = makeStyles((theme) => ({
  title: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: theme.spacing(2),
    "&:before": {
      borderTop: "1px solid",
      content: '""',
      width: "5%",
      marginRight: "3%",
    },
    "&:after": {
      borderTop: "1px solid",
      content: '""',
      width: "5%",
      marginLeft: "3%",
    },
  },
  heading: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
}));

export const WorkDetail = ({ data }) => {
  const classes = useStyles();
  return (
    /* safariに対応するためBoxは必要 */
    <Box mx={4}>
      <Typography variant="h3" className={classes.title}>
        {data.name}
      </Typography>
      <Hidden mdUp>
        <Box m={2}>
          <CardMedia
            component="img"
            width="100%"
            image={data.imgPath}
            title={data.name}
            style={{
              boxShadow: "0px 0px 20px -5px rgba(0, 0, 0, 0.8)",
              maxWidth: "450px",
              margin: "auto",
            }}
          />
        </Box>
      </Hidden>
      <Box my={2}>
        <DetailHeader MainTitle="Description" subTitle="制作物概要" />
        {data.description.split("\n").map((text, index) => {
          return (
            <Box key={index} my={4}>
              <Typography key={index}>{text}</Typography>
            </Box>
          );
        })}
      </Box>
      <Grid container spaceing={1} alignItems="center">
        <Grid item md={6}>
          <Box>
            <Box my={2}>
              <DetailHeader MainTitle="Period" subTitle="制作期間" />
              <Typography>{data.period}</Typography>
            </Box>
            <Box>
              <DetailHeader MainTitle="Keyword" subTitle="使用技術" />
              <Typography>{data.labels.join(" / ")}</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item md={6}>
          <Hidden smDown>
            <CardMedia
              component="img"
              width="100%"
              image={data.imgPath}
              title={data.name}
              style={{
                boxShadow: "0px 0px 20px -5px rgba(0, 0, 0, 0.8)",
                maxWidth: "450px",
                margin: "auto",
              }}
            />
          </Hidden>
        </Grid>
      </Grid>
      <Box my={2} textAlign="center">
        {data.github && (
          <IconLink Icon={GitHubIcon} title="GitHub" link={data.github} />
        )}

        {data.blog && (
          <IconLink Icon={LibraryBooksIcon} title="Blog" link={data.blog} />
        )}
        {data.website && (
          <IconLink Icon={WebIcon} title="website" link={data.website} />
        )}
      </Box>
    </Box>
  );
};

WorkDetail.propTypes = {
  data: PropTypes.object,
};
