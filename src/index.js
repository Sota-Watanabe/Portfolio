import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Main } from "./pages/Main";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Sawarabi Gothic", "Noto Sans", "sans-serif"].join(","),
  },
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Main />
  </MuiThemeProvider>,
  document.getElementById("root")
);
