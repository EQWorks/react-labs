import React from "react";
import { addDecorator, configure } from "@storybook/react";
import { ThemeProvider } from '@material-ui/core/styles';
import { GlobalStyle } from '../src/shared/global'
import theme from '../src/theme/index';

configure(require.context("../stories", true, /\.stories\.js$/), module);

const GlobalWrapper = (storyFn) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
       {storyFn()}
    </ThemeProvider>
  )
}
addDecorator(GlobalWrapper);
