import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider as MUIThemeProvider } from '@material-ui/core/styles'
import { createMuiTheme } from '@material-ui/core/styles'

import overrides from './overrides/index'
import palette from './palette'
import props from './props'
import shadows from './shadows'
import typography from './typography'

const DefaultTheme = createMuiTheme({
  overrides,
  palette,
  props,
  shadows,
  typography,
})

export const ThemeProvider = ({ children, theme = DefaultTheme }) => {
  return (
    <MUIThemeProvider theme={theme}>
      {children}
    </MUIThemeProvider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.object,
}

export default DefaultTheme
