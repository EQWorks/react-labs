import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { fade } from '@material-ui/core/styles/colorManipulator'
import MUIChip from '@material-ui/core/Chip'
import clsx from 'clsx'

const useStyles = makeStyles((theme) => ({
  chip: {
    backgroundColor: (styleProps) => theme.palette[styleProps.backgroundColor].main,
    color: (styleProps) => styleProps.color,
    margin: theme.spacing(1),
  },
  clickable: {
    '&:hover, &:focus': {
      backgroundColor: (styleProps) => fade(theme.palette[styleProps.backgroundColor].main, 0.75),
    },
  },
  onDelete: {
    '&:hover, &:focus': {
      backgroundColor: (styleProps) => `${fade(theme.palette[styleProps.backgroundColor].main, 0.15)} !important`,
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
  rectangle: {
    borderRadius: '4px',
  },
}))

const Chip = ({ clickable, color, onDelete, rectangle, variant, ...props }) => {
  const theme = useTheme()
  const styleProps = {
    backgroundColor: color,
    color: (['primary', 'success', 'warning'].includes(color))
      ? theme.palette.common.black : theme.palette.common.white,
  }
  const classes = useStyles(styleProps)

  return <MUIChip
    className={clsx({
      [classes.chip]: true,
      [classes.clickable]: clickable,
      [classes.onDelete]: onDelete,
      [classes.outlined]: (variant === 'outlined'),
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
}

Chip.defaultProps = {
  clickable: false,
  color: 'primary',
  rectangle: false,
  variant: 'outlined',
}

export default Chip
