import { createMuiTheme } from '@material-ui/core'
import palette from './palette'
import typography from './typography'


const theme = createMuiTheme({
  palette,
  typography,
})

export { palette, typography }
export { PALETTE_EXT, PALETTE_DEFAULT } from './palette'
export default theme
