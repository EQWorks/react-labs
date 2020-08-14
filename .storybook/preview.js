import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'

import theme from '../src/theme/index'

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
]

export const parameters = {
  controls: { expanded: true },
}
