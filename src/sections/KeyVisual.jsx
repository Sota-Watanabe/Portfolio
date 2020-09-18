import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import TwitterIcon from "@material-ui/icons/Twitter";
import { IconLink } from "../components/IconLink";

export const KeyVisual = () => {
  return (
    <Box>
      <Box my={10}>
        <Grid container alignItems="center" justify="center">
          <Typography variant="h1">そーたの</Typography>
          <Typography variant="h1">Portfolio</Typography>
        </Grid>
      </Box>
      <Grid container justify="center">
        <IconLink
          Icon={GitHubIcon}
          title="GitHub"
          link="https://github.com/sota-watanabe"
        />
        <IconLink
          Icon={LibraryBooksIcon}
          title="Blog"
          link="http://blog.so-ta.net"
        />
        <IconLink
          Icon={TwitterIcon}
          title="Twitter"
          link="https://twitter.com/Sota___Watanabe"
        />
      </Grid>
    </Box>
  );
};
