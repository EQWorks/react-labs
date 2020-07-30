// import { fade } from '@material-ui/core/styles/colorManipulator'

const palette = {
  primary: {
    light: '#009AFF',
    main: '#0075FF',
    dark: '#2242CD',
    50: '#E2F3FF',
    100: '#BAE0FF',
    200: '#8BCEFF',
    300: '#53BAFF',
    400: '#14AAFF',
    500: '#009AFF',
    600: '#008BFF',
    700: '#0075FF',
    800: '#1564EC',
    900: '#2242CD'
  },
  secondary: {
    light: '#9E9E9E',
    main: '#616161',
    dark: '#212121',
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#EEEEEE',
    300: '#E0E0E0',
    400: '#BDBDBD',
    500: '#9E9E9E',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121'
  },
  error: {
    light: '#ff5533', // selected using MUI's color tool
    main: '#ea0000',
    dark: '#af0000' // selected using MUI's color tool
  },
  warning: {
    light: '#ffe24b', // selected using MUI's color tool
    main: '#f4b000',
    dark: '#bc8100' // selected using MUI's color tool
  },
  info: {
    light: '#ae57ff', // selected using MUI's color tool
    main: '#741fff',
    dark: '#2e00ca' // selected using MUI's color tool
  },
  success: {
    light: '#64ff4f', // selected using MUI's color tool
    main: '#00d308',
    dark: '#00a000' // selected using MUI's color tool
  },
}

// overrides default namespaces
// const PALETTE_DEFAULT = {
//   primary: { main: '#0075FF' },
//   error: { main: "#ea0000" },
//   warning: { main: "#f4b000" },
//   info: { main: "#741fff" },
//   success: { main: "#00d308" },
// }

// export { PALETTE_DEFAULT }

// // extended namespaces
// const PALETTE_EXT = {
//   shade: {
//     primary: {
//       50:  '#E2F3FF',
//       100: '#BAE0FF',
//       200: '#8BCEFF',
//       300: '#53BAFF',
//       400: '#14AAFF',
//       500: '#009AFF',
//       600: '#008BFF',
//       700: '#0075FF',
//       800: '#1564EC',
//       900: '#2242CD',
//     },
//     secondary: {
//       50:  '#FAFAFA',
//       100: '#F5F5F5',
//       200: '#EEEEEE',
//       300: '#E0E0E0',
//       400: '#BDBDBD',
//       500: '#9E9E9E',
//       600: '#757575',
//       700: '#616161',
//       800: '#424242',
//       900: '#212121',
//     },
//   },
//   state: {
//     hoverWhite: fade(PALETTE_DEFAULT.primary.main, 0.05),
//     hoverColored: 'rgba(0,0,0,0.15)',
//   },
//   shadow: {
//     10: '0px 1px 4px rgba(12, 12, 13, 0.1)',
//     20: '0px 2px 8px rgba(12, 12, 13, 0.15)',
//     30: '0px 4px 12px rgba(12, 12, 13, 0.2)',
//     40: '0px 8px 16px rgba(0, 0, 0, 0.25)',
//   },
// }
// export { PALETTE_EXT }

// const palette = {
//   ...PALETTE_DEFAULT,
//   ...PALETTE_EXT,
// }

export default palette
