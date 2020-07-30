import React from "react";
import { addDecorator, configure } from "@storybook/react";
import { ThemeProvider } from "@material-ui/core/styles";

import LOCUSTheme from "../src/themes";

configure(require.context("../stories", true, /\.stories\.js$/), module);

const GlobalWrapper = (storyFn) => {
  return <ThemeProvider theme={LOCUSTheme}>{storyFn()}</ThemeProvider>
};

addDecorator(GlobalWrapper);