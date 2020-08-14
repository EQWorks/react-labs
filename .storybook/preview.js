import React from 'react'
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'
import { ThemeProvider } from '@material-ui/core/styles'

import theme from '../src/theme/index'

export const parameters = {
  controls: { expanded: true },
  viewport: {
    viewports: MINIMAL_VIEWPORTS,
  },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];