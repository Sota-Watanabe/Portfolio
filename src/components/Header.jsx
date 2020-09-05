import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import { HeaderLinks } from "./HeaderLinks";

export const Header = () => {
  return (
    <div>
      <AppBar position="fixed" color="default">
        <Toolbar>
          <Container maxWidth="sm">
            <HeaderLinks />
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
};
