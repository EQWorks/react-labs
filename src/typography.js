import React from 'react'
import { Typography as MuiTypography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({ root: (marginBottom) => ({ marginBottom: theme.spacing(marginBottom) }) }))

const Typography = ({ marginBottom, children, ...rest }) => {
  const classes = useStyles(marginBottom)
  return <MuiTypography className={classes.root} {...rest}>{children}</MuiTypography>
}

Typography.propTypes = { 
  marginBottom: PropTypes.number,
  children: PropTypes.string.required,
}
Typography.defaultProps = { marginBottom: 0 }

export default Typography
