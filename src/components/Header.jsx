import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import { HeaderLinks } from "./HeaderLinks";

function Header() {
  return (
    <div>
      <AppBar position="fixed" color="default">
        <Toolbar>
          <Container maxWidth="md">
            <HeaderLinks />
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
