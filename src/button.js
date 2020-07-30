import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'

const ButtonComponent = ({ type, ...props }) => {
  const styleProps = {
    color: 'primary',
    type: 'primary'
  }
  if (type === 'primary') {
    props.variant = 'contained'
  } else if (type === 'secondary') {
    props.variant = 'outlined'
  } else if (type === 'tertiary') {
    props.variant = 'text'
  }

  return <Button {...styleProps} {...props}>Button</Button>
}

ButtonComponent.propTypes = {
  type: PropTypes.string
}

ButtonComponent.defaultProps = {
  type: 'primary'
}

export default ButtonComponent