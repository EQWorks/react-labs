import React from "react";
import { addDecorator, configure } from "@storybook/react";
import { ThemeProvider } from "@material-ui/core/styles";
import LOCUSTheme from "../src/themes";
import { withKnobs, select } from "@storybook/addon-knobs";

configure(require.context("../stories", true, /\.stories\.js$/), module);

const options = {
  LocusTheme: true,
  DefaultTheme: false,
};

const GlobalWrapper = (storyFn) => {
  const checked = select("Theme", options, true);
  return checked ? (
    <ThemeProvider theme={LOCUSTheme}>{storyFn()}</ThemeProvider>
  ) : (
    storyFn()
  );
};

addDecorator(withKnobs);
addDecorator(GlobalWrapper);
