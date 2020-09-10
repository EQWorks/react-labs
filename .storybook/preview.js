import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'

import { Theme } from '../src/index'

export const decorators = [
  (Story) => (
    <ThemeProvider theme={Theme}>
      <Story />
    </ThemeProvider>
  ),
]

export const parameters = {
  controls: { expanded: true },
}
