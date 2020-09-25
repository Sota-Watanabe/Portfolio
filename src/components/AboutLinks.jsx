import React from "react";
import { Grid, Box } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import TwitterIcon from "@material-ui/icons/Twitter";
import { IconLink } from "./IconLink";

export const AboutLinks = () => {
  return (
    <Box m={10}>
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
