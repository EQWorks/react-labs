import { createMuiTheme } from '@material-ui/core/styles'
import overrides from './overrides/index'
import palette from './palette'
import props from './props'
import shadows from './shadows'
import typography from './typography'

const theme = createMuiTheme({
  overrides,
  palette,
  props,
  shadows,
  typography,
})

export default theme
