import React from "react";
import { addDecorator, configure } from "@storybook/react";
import { ThemeProvider } from "@material-ui/core/styles";

import LOCUSTheme from "../src/theme";

configure(require.context("../stories", true, /\.stories\.js$/), module);

const GlobalWrapper = (storyFn) => {
  return <ThemeProvider theme={LOCUSTheme}>{storyFn(LOCUSTheme)}</ThemeProvider>
};

addDecorator(GlobalWrapper);