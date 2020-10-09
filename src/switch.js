import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Switch from '@material-ui/core/Switch'

const useStyles = makeStyles((theme) => {
  const borderRadius = 3
  const thumbHeight = 15
  const thumbWidth = 7
  const inputPadding = 4

  return {
    checked: {
      '& $thumb': {
        color: theme.palette.common.white,
      },
    },
    root: {
      backgroundColor: theme.palette.common.white,
      border: props => props.checked ? `1px solid ${theme.palette.primary.main}` : `1px solid ${theme.palette.grey[400]}`,
      borderRadius: `${borderRadius}px`,
      height: `calc(2px + ${thumbHeight}px + ${inputPadding * 2}px)`,
      margin: '0 10px',
      padding: 0,
      transition: `all 150ms ${theme.transitions.easing.easeInOut}`,
      width: `calc(29px + ${inputPadding * 2}px)`,
      '&:hover': {
        backgroundColor: theme.palette.common.white,
        border: `1px solid ${theme.palette.primary.main}`,
        '& $switchBase': {
          backgroundColor: 'transparent',
          padding: `${inputPadding}px`,
        },
      },
    },
    switchBase: {
      margin: 0,
      padding: `${inputPadding}px`,
      '&$checked': {
        '& + $track': {
          backgroundColor: theme.palette.primary.main,
          opacity: 1,
        },
      },
    },
    thumb: {
      borderRadius: `${borderRadius}px`,
      color: theme.palette.grey[400],
      height: `${thumbHeight}px`,
      margin: 0,
      padding: 0,
      width: `${thumbWidth}px`,
    },
    track: {
      backgroundColor: theme.palette.common.white,
      borderRadius: 0,
      margin: 0,
      padding: 0,
    },
  }
})

const StyledSwitch = (props) => {
  const classes = useStyles(props)
  return <Switch classes={classes} disableRipple {...props} />
}

StyledSwitch.propTypes = {
  /**
    * If true, the component is checked.
  */
  checked: PropTypes.bool,
  /**
    * If `true`, the switch will be disabled.
  */
  disabled: PropTypes.bool,
}

StyledSwitch.defaultProps = {
  disabled: false,
}

export default StyledSwitch
