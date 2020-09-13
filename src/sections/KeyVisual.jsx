import React from "react";
import {
  Grid,
  Typography,
  Box,
  Tooltip,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import TwitterIcon from "@material-ui/icons/Twitter";
const useStyles = makeStyles((theme) => ({
  customTooltip: {
    fontSize: "15px",
  },
}));

export const KeyVisual = () => {
  const classes = useStyles();
  return (
    <Box>
      <Box my={10}>
        <Grid container alignItems="center" justify="center">
          <Typography variant="h2">そーたの</Typography>
          <Typography variant="h2">Portfolio</Typography>
        </Grid>
      </Box>
      <Grid container justify="center">
        <Tooltip
          classes={{ tooltip: classes.customTooltip }}
          title="GitHub"
          arrow
        >
          <IconButton
            component="a"
            href="http://github.com/sota-watanabe"
            target="_blank"
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
        </Tooltip>
        <Tooltip
          classes={{ tooltip: classes.customTooltip }}
          title="Blog"
          arrow
        >
          <IconButton
            component="a"
            href="http://blog.so-ta.net"
            target="_blank"
          >
            <LibraryBooksIcon fontSize="large" />
          </IconButton>
        </Tooltip>
        <Tooltip
          classes={{ tooltip: classes.customTooltip }}
          title="Twitter"
          arrow
        >
          <IconButton
            component="a"
            href="http://blog.so-ta.net"
            target="_blank"
          >
            <TwitterIcon fontSize="large" />
          </IconButton>
        </Tooltip>
      </Grid>
    </Box>
  );
};
