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
      main: grey[800],
      dark: grey[900],
      light: grey[500],
      black: "black",
    },
    secondary: {
      main: grey[50],
      light: grey[900],
      dark: pink[300],
    },
  },
  typography: {
    fontFamily: ["Noto Sans JP", "sans-serif", "游ゴシック体"].join(","),
    fontWeight: "300",
    button: {
      textTransform: "none",
    },
    h1: {
      fontSize: "14vw",
      fontFamily: "Kaushan Script",
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
    subtitle1: {
      fontSize: "20px",
    },
    body1: {
      fontSize: "16px",
      letterSpacing: "0.1em",
    },
    body2: {
      fontSize: "12px",
    },
  },
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Main />
  </MuiThemeProvider>,
  document.getElementById("root")
);
