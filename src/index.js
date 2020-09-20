import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Main } from "./pages/Main";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
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
      fontSize: "15px",
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
