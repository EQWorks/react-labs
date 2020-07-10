import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

import { palette, typography } from './themes'


const useStyles = makeStyles((t) => {
  const theme = {
    ...t,
    typography: {
      ...t.typography,
      ...typography,
    },
    palette: {
      ...t.palette,
      ...palette,
    },
  }

  return {
    primary: {
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.body1,
      margin: theme.spacing(0.5),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      textTransform: 'none',
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      "&:hover": {
        backgroundColor: theme.palette.primary.main,
        backgroundImage: `linear-gradient(0deg, ${theme.palette.state.hoverColored}, ${theme.palette.state.hoverColored})`,
      },
      "&:disabled": {
        color: theme.palette.common.white,
        opacity: 0.5,
      },
    },
    secondary: {
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.body1,
      margin: theme.spacing(0.5),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      textTransform: "none",
      border: "solid 1px",
      color: theme.palette.primary.main,
      "&:hover": {
        backgroundColor: theme.palette.state.hoverWhite,
        color: theme.palette.primary.main,
      },
      "&:disabled": {
        opacity: 0.5,
        border: "solid 1px",
        color: theme.palette.primary.main,
      },
    },
    tertiary: {
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.body1,
      margin: theme.spacing(0.5),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      textTransform: "none",
      backgroundColor: "rgba(255,255,255,0)",
      color: theme.palette.primary.main,
      "&:hover": {
        backgroundColor: theme.palette.state.hoverWhite,
        color: theme.palette.primary.main,
      },
      "&:disabled": {
        opacity: 0.5,
        color: theme.palette.primary.main,
      },
    },
    loadPrimary: {
      color: theme.palette.primary.main,
    },
    loadSecondary: {
      color: "rgba(255,255,255,0)",
    },
  }
})

const DynamicButton = ({
  type,
  children,
  load,
  ...rest
}) => {
  const classes = useStyles()
  
  return (
    <Button
      className={classes[type]}
      disableRipple
      disableElevation
      {...rest}
    >
      <div className={clsx({
        [classes.loadPrimary]: load && type === 'primary',
        [classes.loadSecondary]: load && type !== 'primary',
      })}>
        {children}
      </div>
    </Button>
  )
}

DynamicButton.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  load: PropTypes.bool,
}

DynamicButton.defaultProps = {
  type: "primary",
  children: "Call to action",
  load: false,
}

export default DynamicButton
