import palette from './palette'

const overrides = {
  MuiButton: {
    contained: {
      boxShadow: 'none',
      '&:hover': {
        boxShadow: 'none'
      }
    },
    containedPrimary: {
      '&:hover': {
        backgroundColor: palette.primary.dark
      }
    },
    outlinedPrimary: {
      border: `1px solid ${palette.primary.main}`,
      '&:hover': {
        backgroundColor: palette.primary[50]
      }
    },
    textPrimary: {
      padding: '6px 16px',
      '&:hover': {
        backgroundColor: palette.primary[50]
      }
    },
    textSizeSmall: {
      padding: '4px 10px'
    },
    textSizeLarge: {
      padding: '8px 22px'
    }
  }
}

export default overrides
