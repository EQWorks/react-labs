import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import MUIButton from '@material-ui/core/Button'
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

const Button = ({ children, isLoading, noSpacing, type, ...props }) => {
  const classes = useStyles()

  const styleProps = {
    color: 'primary',
    type,
  }

  if (type === 'tertiary') {
    props.variant = 'text'
  } else if (type === 'secondary') {
    props.variant = 'outlined'
  } else {
    props.variant = 'contained'
  }

  return (
    <MUIButton className={clsx({ [classes.label]: isLoading,
      [classes.noSpacing]: noSpacing,
    })} data-testid='button' {...styleProps} {...props} >
      {children}
    </MUIButton>
  )
}

Button.propTypes = {
  /**
    * The content of the button.
  */
  children: PropTypes.string,
  /**
    * Toggle loading style of component.
  */
  isLoading: PropTypes.bool,
  /**
    * If `true`, margin/padding property of the button will be set to 0. Recommended for tertiary buttons. 
   */
  noSpacing: PropTypes.bool,
  /**
    * The size of the button.small is equivalent to the dense button styling.
  */
  size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
  /**
    * The variant to use.
  */
  type: PropTypes.oneOf(['primary', 'secondary', 'tertiary']).isRequired,
}

Button.defaultProps = {
  isLoading: false,
  noSpacing: false,
  size: 'medium',
  type: 'primary',
}

export default Button
