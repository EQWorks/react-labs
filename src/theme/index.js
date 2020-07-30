import { createMuiTheme } from '@material-ui/core/styles'
import palette from './palette'
import shadows from './shadows'
import typography from './typography'

const theme = createMuiTheme({
  palette,
  shadows,
  typography
})

// export { palette, typography }
// export { PALETTE_EXT, PALETTE_DEFAULT } from './palette'
export default theme
