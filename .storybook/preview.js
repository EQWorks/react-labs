import React from 'react'

import { ThemeProvider } from '../src/index'

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ),
]

export const parameters = {
  controls: { expanded: true },
}
