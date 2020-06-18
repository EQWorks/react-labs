import { fade } from '@material-ui/core/styles/colorManipulator';

const palette = {
  primary: { main: '#0075FF' },
  error: { main: "#ea0000" },
  warning: { main: "#f4b000" },
  info: { main: "#741fff" },
  success: { main: "#00d308" },
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
  },
  state: {
    hoverWhite: fade('#0075ff', 0.05),
    hoverColored: 'rgba(0,0,0,0.15)',
  },
  shadow: {
    10: '0px 1px 4px rgba(12, 12, 13, 0.1)',
    20: '0px 2px 8px rgba(12, 12, 13, 0.15)',
    30: '0px 4px 12px rgba(12, 12, 13, 0.2)',
    40: '0px 8px 16px rgba(0, 0, 0, 0.25)',
  },
};

export default palette;
