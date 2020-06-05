const locusBlue = {
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
};

const palette = {
  type: "light",
  primary: { main: locusBlue[700] },
  error: { main: "#ea0000" },
  warning: { main: "#f4b000" },
  info: { main: "#741fff" },
  success: { main: "#00d308" },
  text: {
    primary: "#000",
    secondary: "rgba(0, 0, 0, 0.54)",
    link: "#0076ff",
  },
  background: {
    highlight: "#f2f2f2",
    paper: "#fff",
    default: "#fff",
  },
  disabled: "rgba(0, 0, 0, 0.26)",
  hoverOnWhite: '#F4F6FD',
  hoverOnPrimary: '#115CE6',
  locusBlue,
};

export default palette;
