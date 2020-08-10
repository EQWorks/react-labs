import palette from '../palette'

const MuiButton = {
  contained: {
    boxShadow: 'none',
    '&:disabled': {
      backgroundColor: palette.primary.main,
      color: palette.common.white,
      opacity: 0.5,
    },
    '&:hover': {
      boxShadow: 'none',
    },
  },
  containedPrimary: {
    '&:hover': {
      backgroundColor: palette.primary[800],
    },
  },
  outlinedPrimary: {
    border: `1px solid ${palette.primary.main}`,
    '&:disabled': {
      border: `1px solid ${palette.primary.main}`,
      color: palette.primary.main,
      opacity: 0.5,
    },
    '&:hover': {
      backgroundColor: palette.primary[50],
    },
  },
  textPrimary: {
    padding: '6px 16px',
    '&:disabled': {
      color: palette.primary.main,
      opacity: 0.5,
    },
    '&:hover': {
      backgroundColor: palette.primary[50],
    },
  },
  textSizeSmall: {
    padding: '4px 10px',
  },
  textSizeLarge: {
    padding: '8px 22px',
  },
}

export default MuiButton
