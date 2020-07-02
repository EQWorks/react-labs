import { fade } from '@material-ui/core/styles/colorManipulator'

// overrides default namespaces
const PALETTE_DEFAULT = {
  primary: { main: '#0075FF' },
  error: { main: "#ea0000" },
  warning: { main: "#f4b000" },
  info: { main: "#741fff" },
  success: { main: "#00d308" },
}

export { PALETTE_DEFAULT }

// extended namespaces
const PALETTE_EXT = {
  shade: {
    primary: {
      50:  '#E2F3FF',
      100: '#BAE0FF',
      200: '#8BCEFF',
      300: '#53BAFF',
      400: '#14AAFF',
      500: '#009AFF',
      600: '#008BFF',
      700: '#0075FF',
      800: '#1564EC',
      900: '#2242CD',
    },
    secondary: {
      50:  '#FAFAFA',
      100: '#F5F5F5',
      200: '#EEEEEE',
      300: '#E0E0E0',
      400: '#BDBDBD',
      500: '#9E9E9E',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
    },
  },
  state: {
    hoverWhite: fade(PALETTE_DEFAULT.primary.main, 0.05),
    hoverColored: 'rgba(0,0,0,0.15)',
  },
  shadow: {
    10: '0px 1px 4px rgba(12, 12, 13, 0.1)',
    20: '0px 2px 8px rgba(12, 12, 13, 0.15)',
    30: '0px 4px 12px rgba(12, 12, 13, 0.2)',
    40: '0px 8px 16px rgba(0, 0, 0, 0.25)',
  },
}
export { PALETTE_EXT }

const palette = {
  ...PALETTE_DEFAULT,
  ...PALETTE_EXT,
}

export default palette
