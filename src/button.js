import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'

const ButtonComponent = ({ text, type, ...props }) => {
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
      {text}
    </Button>
  )
}

ButtonComponent.propTypes = {
  text: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['primary', 'secondary', 'tertiary']).isRequired,
}

ButtonComponent.defaultProps = {
  text: 'Button',
  type: 'primary',
}

export default ButtonComponent
