import React from 'react'
import { Typography as MuiTypography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => (
  { 
    root: ({ marginBottom, secondary }) => ({ 
      marginBottom: theme.spacing(marginBottom),
      color: theme.palette.secondary[secondary],
    }), 
  }))

const Typography = ({ marginBottom, children, secondary, ...rest }) => {
  const classes = useStyles({ marginBottom, secondary })
  return <MuiTypography className={classes.root} {...rest}>{children}</MuiTypography>
}

Typography.propTypes = { 
  marginBottom: PropTypes.number,
  children: PropTypes.string.isRequired,
  secondary: PropTypes.number,
}
Typography.defaultProps = { 
  marginBottom: 0,
  secondary: undefined,
}

export default Typography
