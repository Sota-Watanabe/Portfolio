import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Main } from "./pages/Main";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import { grey, pink } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    type: "light",
    // type: "dark",
    primary: {
      main: grey[50],
      light: grey[900],
      dark: pink[300],
    },
    secondary: {
      main: grey[800],
      dark: grey[900],
      light: grey[700],
      black: "black",
    },
  },
  typography: {
    fontFamily: ["Noto Sans JP", "sans-serif", "游ゴシック体"].join(","),
    button: {
      textTransform: "none",
    },
    h1: {
      fontSize: "60px",
    },
    h2: {
      fontSize: "40px",
    },
    h3: {
      fontSize: "30px",
    },
    h4: {
      fontSize: "20px",
    },
    body1: {
      fontSize: "16px",
      letterSpacing: "0.1em",
    },
  },
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Main />
  </MuiThemeProvider>,
  document.getElementById("root")
);
