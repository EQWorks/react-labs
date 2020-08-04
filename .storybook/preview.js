import React from "react";
import { addDecorator, configure } from "@storybook/react";
import { ThemeProvider } from "@material-ui/core/styles";

import customTheme from "../src/theme/index";

configure(require.context("../stories", true, /\.stories\.js$/), module);

addDecorator((StoryFn) => (
  <ThemeProvider theme={customTheme}>
    <StoryFn />
  </ThemeProvider>
));
