import React from "react";
import { Box, Typography, Link } from "@material-ui/core";

export const Footer = () => {
  return (
    <Box textAlign="center">
      <Typography variant="h10">
        Copyright©2020. Sota Watanabe.{" "}
        <Link href="https://github.com/Sota-Watanabe/Portfolio/">
          Source Code
        </Link>
      </Typography>
    </Box>
  );
};
