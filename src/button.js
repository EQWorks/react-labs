import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'

const ButtonComponent = ({ children, type, ...props }) => {
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
    <Button {...styleProps} {...props}>
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
    * The size of the button.small is equivalent to the dense button styling.
  */
  size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
  /**
    * The variant to use.
  */
  type: PropTypes.oneOf(['primary', 'secondary', 'tertiary']).isRequired,
}

ButtonComponent.defaultProps = {
  size: 'medium',
  type: 'primary',
}

export default ButtonComponent
