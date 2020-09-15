import React from 'react'

import { Theme, ThemeProvider } from '../src/index'

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
