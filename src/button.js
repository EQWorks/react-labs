import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import clsx from 'clsx'

const useStyles = makeStyles((theme) => {
  return {
    label: {
      color: 'rgba(0, 0, 0, 0.0) !important',
    },
    noSpacing: {
      padding: theme.spacing(0),
    },
  }
})

const ButtonComponent = ({ children, isLoading, type, noSpacing, ...props }) => {
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
    <Button className={clsx({ [classes.label]: isLoading,
      [classes.noSpacing]: noSpacing,
    })} data-testid='button' {...styleProps} {...props} >
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
  /**
    * If `true`, margin/padding property of the button will be set to 0. Recommended for tertiary buttons. 
   */
  noSpacing: PropTypes.bool,
}

ButtonComponent.defaultProps = {
  isLoading: false,
  noSpacing: false,
  size: 'medium',
  type: 'primary',
}

export default ButtonComponent
