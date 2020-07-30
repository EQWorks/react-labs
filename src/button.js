import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'

const ButtonComponent = ({ children, type, ...props }) => {
  const styleProps = {
    color: 'primary',
    type: 'primary'
  }
  if (type === 'tertiary') {
    props.variant = 'text'
  } else if (type === 'secondary') {
    props.variant = 'outlined'
  } else {
    props.variant = 'contained'
  }

  return <Button {...styleProps} {...props}>{children}</Button>
}

ButtonComponent.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(['primary', 'secondary', 'tertiary'])
}

ButtonComponent.defaultProps = {
  children: 'Button',
  type: 'primary'
}

export default ButtonComponent