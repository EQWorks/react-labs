import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { fade, getContrastRatio } from '@material-ui/core/styles/colorManipulator'
import MUIChip from '@material-ui/core/Chip'
import clsx from 'clsx'

const useStyles = makeStyles((theme) => ({
  chip: {
    backgroundColor: (styleProps) => theme.palette[styleProps.backgroundColor].main,
    color: (styleProps) => styleProps.color,
    margin: ({ margin }) => theme.spacing(margin),
  },
  clickable: {
    '&:hover, &:focus': {
      backgroundColor: (styleProps) => fade(theme.palette[styleProps.backgroundColor].main, 0.75),
    },
  },
  onDelete: {
    '&:hover, &:focus': {
      backgroundColor: (styleProps) => `${fade(theme.palette[styleProps.backgroundColor].main, 0.75)} !important`,
    },
  },
  outlined: {
    backgroundColor: `${theme.palette.common.white} !important`,
    border: (styleProps) => `1px solid ${theme.palette[styleProps.backgroundColor].main}`,
    color: (styleProps) => `${theme.palette[styleProps.backgroundColor].main} !important`,
  },
  outlinedClickable: {
    '&:hover, &:focus': {
      backgroundColor: (styleProps) => `${fade(theme.palette[styleProps.backgroundColor].main, 0.15)} !important`,
    },
  },
  outlinedOnDelete: {
    '&:hover, &:focus': {
      backgroundColor: (styleProps) => `${fade(theme.palette[styleProps.backgroundColor].main, 0.15)} !important`,
    },
  },
  rectangle: {
    borderRadius: '4px',
  },
  custom: {
    backgroundColor: (styleProps) => `${styleProps.custom.backgroundColor} !important`,
    border: (styleProps) => `1px solid ${styleProps.custom.backgroundColor} !important`,
    color: (styleProps) => `${styleProps.custom.color} !important`,
  },
  outlinedCustom: {
    backgroundColor: `${theme.palette.common.white} !important`,
    border: (styleProps) => `1px solid ${styleProps.custom.backgroundColor} !important`,
    color: (styleProps) => `${styleProps.custom.backgroundColor} !important`,
  },
}))

const determineColor = backgroundColor => {
  const ratioToWhite = getContrastRatio(backgroundColor, '#FFF')
  const ratioToBlack = getContrastRatio(backgroundColor, '#000')
  return ratioToWhite >= ratioToBlack ? '#FFF' : '#000'
}

const Chip = ({ clickable, color, custom, onDelete, rectangle, variant, margin, ...props }) => {
  const theme = useTheme()

  const checkValidColor = (color) => {
    var e = document.getElementById('divValidColor')
    if (!e) {
      e = document.createElement('div')
      e.id = 'divValidColor'
    }
    e.style.borderColor = ''
    e.style.borderColor = color
    var tmpcolor = e.style.borderColor
    if (tmpcolor.length == 0) {
      return false
    }
    return true
  }

  const customColor = (checkValidColor(custom)) ? custom : theme.palette.primary.main

  const styleProps = {
    backgroundColor: color,
    color: (['primary', 'success', 'warning'].includes(color))
      ? theme.palette.common.black : theme.palette.common.white,
    custom: {
      backgroundColor: customColor,
      color: determineColor(customColor),
    },
    margin: margin,
  }

  const classes = useStyles(styleProps)

  return <MUIChip
    className={clsx({
      [classes.chip]: true,
      [classes.clickable]: clickable,
      [classes.custom]: (custom && variant !== 'outlined'),
      [classes.outlinedCustom]: (custom && variant === 'outlined'),
      [classes.onDelete]: (onDelete && variant !== 'outlined'),
      [classes.outlined]: (variant === 'outlined'),
      [classes.outlinedOnDelete]: (onDelete && variant === 'outlined'),
      [classes.outlinedClickable]: (variant === 'outlined' && clickable),
      [classes.rectangle]: rectangle,
    })}
    clickable={clickable}
    data-testid='chip'
    onDelete={onDelete}
    variant={variant}
    {...props}
  />
}

Chip.propTypes = {
  /**
    * If true, the chip will appear clickable.
  */
  clickable: PropTypes.bool,
  /**
    * The color of the element.
  */
  color: PropTypes.oneOf(['primary', 'secondary', 'success', 'error', 'warning', 'info']).isRequired,
  /**
    * The custom color of the element.
  */
  custom: PropTypes.string,
  /**
    * Callback function fired when the delete icon is clicked. If set, the delete icon will be shown.
  */
  onDelete: PropTypes.func,
  /**
    * If true, the element shape will be rectangular.
  */
  rectangle: PropTypes.bool,
  /**
    * The variant to use.
  */
  variant: PropTypes.oneOf(['default', 'outlined']),
  /**
    * determines the margin size around the component 1 = 8px
  */
  margin: PropTypes.number,
}

Chip.defaultProps = {
  clickable: false,
  color: 'primary',
  rectangle: false,
  variant: 'default',
  margin: 0,
}

export default Chip
