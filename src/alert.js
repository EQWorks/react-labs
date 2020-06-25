import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import MUIAlert from '@material-ui/lab/Alert'
import AlertTitle from '@material-ui/lab/AlertTitle'


const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
  },
}))

const Alert = ({ severity, message, header, ...props }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {header ? (
        <MUIAlert severity={severity} {...props}>
          <AlertTitle><strong>{header}</strong></AlertTitle>
          {message}
        </MUIAlert>
      ) : (
        <MUIAlert severity={severity} {...props}>{message}</MUIAlert>
      )}
    </div>
  )
}

const propTypes = {
  severity: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  header: PropTypes.string,
}

Alert.propTypes = propTypes
export default Alert
