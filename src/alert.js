import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import MUIAlert from '@material-ui/lab/Alert'
import AlertTitle from '@material-ui/lab/AlertTitle'


const useStyles = makeStyles({ root: ({ width = '100%' }) => ({ height: 'auto', width }) })


const Alert = ({ message, header, width, ...props }) => {
  const classes = useStyles({ width })
  return (
    <div data-testid='alert' className={classes.root}>
      <MUIAlert {...props}>
        {header && (
          <AlertTitle>
            <strong>{header}</strong>
          </AlertTitle>
        )}
        {message}
      </MUIAlert>
    </div>
  )
}

Alert.propTypes = {
  /**
    * The header of the component.
  */
  header: PropTypes.string,
  /**
    * The message of the component.
  */
  message: PropTypes.string.isRequired,
  /**
    * The width of the component.
  */
  width: PropTypes.string,
}

Alert.defaultProps = {
  header: null,
  variant: 'standard',
  width: '100%',
}

export default Alert
