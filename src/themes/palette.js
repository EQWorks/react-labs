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
    hoverWhite: () => fade(this.primary.main, 0.05),
    hoverColored: 'rgba(0,0,0,0.15)',
  },
};

export default palette;
