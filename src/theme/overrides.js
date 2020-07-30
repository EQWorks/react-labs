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
      '&:hover': {
        backgroundColor: palette.primary[50]
      }
    }
  }
}

export default overrides
