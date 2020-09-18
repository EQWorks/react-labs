import React from 'react'
import { ReactQueryDevtools } from 'react-query-devtools'

import { ThemeProvider } from '../src/index'

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <ReactQueryDevtools initialIsOpen />
      <Story />
    </ThemeProvider>
  ),
]

export const parameters = {
  controls: { expanded: true },
}
