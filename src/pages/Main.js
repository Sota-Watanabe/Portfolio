import React from "react";
import { Header } from "../components/Header";
import CssBaseline from "@material-ui/core/CssBaseline";
import { KeyVisual } from "../sections/KeyVisual";
import { About } from "../sections/About";
import { Skills } from "../sections/Skills";
export const Main = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <KeyVisual />
      <About />
      <Skills />
    </>
  );
};
