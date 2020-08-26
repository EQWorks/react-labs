import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => {
  return {
    primary: {
      boxSizing: 'border-box',
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.body1,
      margin: theme.spacing(0.5),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      textTransform: 'none',
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      '&:hover': {
        backgroundColor: theme.palette.primary.main,
        backgroundImage: `linear-gradient(0deg, ${theme.palette.action.active}, ${theme.palette.action.active})`,
      },
      '&:disabled': {
        color: theme.palette.common.white,
        opacity: 0.5,
      },
    },
    secondary: {
      boxSizing: 'border-box',
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.body1,
      margin: theme.spacing(0.5),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      textTransform: 'none',
      border: `1px solid ${theme.palette.primary.main}`,
      color: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: theme.palette.primary[50],
        color: theme.palette.primary.main,
      },
      '&:disabled': {
        opacity: 0.5,
        border: `1px solid ${theme.palette.primary.main}`,
      },
    },
    tertiary: {
      boxSizing: 'border-box',
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.body1,
      margin: theme.spacing(0.5),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      textTransform: 'none',
      backgroundColor: 'rgba(255,255,255,0)',
      color: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: theme.palette.primary[50],
        color: theme.palette.primary.main,
      },
      '&:disabled': {
        opacity: 0.5,
        color: theme.palette.primary.main,
      },
    },
    noSpacing: {
      margin: theme.spacing(0),
      padding: theme.spacing(0),
    },
    load: {
      color: 'rgba(0, 0, 0, 0.0) !important',
    },
  }
})

const DynamicButton = ({ type, children, load, noSpacing, ...rest }) => {
  const classes = useStyles()
  return (
    <Button className={clsx(classes[type], { [classes.noSpacing]: noSpacing, [classes.load]: load })} disableRipple disableElevation {...rest}>
      {children}
    </Button>
  )
}

DynamicButton.propTypes = {
  /**
    * The content of the component.
  */
  children: PropTypes.node,
  /**
    * Toggle loading style of component.
  */
  load: PropTypes.bool,
  /**
    * The variant to use.
  */
  type: PropTypes.oneOf(['primary', 'secondary', 'tertiary']).isRequired,
  /**
    * If `true`, margin/padding property of the button will be set to 0. Recommended for tertiary buttons. 
   */
  noSpacing: PropTypes.bool,

}

DynamicButton.defaultProps = {
  children: 'Call to action',
  load: false,
  type: 'primary',
  noSpacing: false,
}

export default DynamicButton
