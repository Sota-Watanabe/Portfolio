import React from "react";
import { Header } from "./Header";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Body } from "./Body";
export const App = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Body />
    </>
  );
};
