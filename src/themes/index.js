import { createMuiTheme } from '@material-ui/core'
import palette from './palette'
import typography from './typography'


const theme = createMuiTheme({
  palette,
  typography,
})

export { palette }
export { extension as PALETTE_EXT } from './palette'
export default theme
