import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Switch from '@material-ui/core/Switch'

const useStyles = makeStyles((theme) => {
  const thumbHeight = 15
  const thumbWidth = 7
  const inputPadding = 4
  return {
    root: {
      borderRadius: '3px',
      height: `calc(${thumbHeight}px + ${inputPadding * 2}px)`,
      margin: '0 10px',
      padding: 0,
      width: `calc(27px + ${inputPadding * 2}px)`,
    },
    switchBase: {
      borderRadius: '4px',
      margin: 0,
      padding: `${inputPadding}px`,
    },
    thumb: {
      borderRadius: '3px',
      height: `${thumbHeight}px`,
      margin: 0,
      padding: 0,
      width: `${thumbWidth}px`,
    },
    track: {
      borderRadius: '3px',
      margin: 0,
      padding: 0,
    },
  }
})

const StyledSwitch = (props) => {
  const classes = useStyles()
  return <Switch classes={classes} disableRipple {...props} />
}

StyledSwitch.propTypes = {
  /**
    * If `true`, the switch will be disabled.
  */
  disabled: PropTypes.bool,
}

StyledSwitch.defaultProps = {
  disabled: false,
}

export default StyledSwitch
