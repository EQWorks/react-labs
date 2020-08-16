import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(() => {
  return {
    label: {
      color: 'rgba(0, 0, 0, 0.0) !important',
    },
  }
})

const ButtonComponent = ({ children, isLoading, type, ...props }) => {
  const classes = useStyles()

  const styleProps = {
    color: 'primary',
    type: 'primary',
  }
  if (type === 'tertiary') {
    props.variant = 'text'
  } else if (type === 'secondary') {
    props.variant = 'outlined'
  } else {
    props.variant = 'contained'
  }

  return (
    <Button className={(isLoading) ? `${classes.label}` : null } {...styleProps} {...props}>
      {children}
    </Button>
  )
}

ButtonComponent.propTypes = {
  /**
    * The content of the button.
  */
  children: PropTypes.string.isRequired,
  /**
    * If `true`, the button will be disabled.
  */
  disabled: PropTypes.bool,
  /**
    * Toggle loading style of component.
  */
  isLoading: PropTypes.bool,
  /**
    * The size of the button.small is equivalent to the dense button styling.
  */
  size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
  /**
    * The variant to use.
  */
  type: PropTypes.oneOf(['primary', 'secondary', 'tertiary']).isRequired,
}

ButtonComponent.defaultProps = {
  isLoading: false,
  size: 'medium',
  type: 'primary',
}

export default ButtonComponent
