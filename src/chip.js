import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import MUIChip from '@material-ui/core/Chip'

import { palette } from './themes'

const useStyles = makeStyles((theme) => ({
  chip: {
    margin: theme.spacing(1),
    textTransform: 'capitalize'
  }
}))

const Chip = ({ backgroundColor, clickable, label, onClick }) => {
  const classes = useStyles()

  const determineBackgroundColor = (inputBackgroundColor) => {
    if (inputBackgroundColor === 'error') {
      return palette.error.main
    } else if (inputBackgroundColor === 'primary' || !inputBackgroundColor.includes('#')) {
      return palette.primary.main
    } else {
      return inputBackgroundColor
    }
  }

  const determineColor = (inputBackgroundColor) => {
    if (!inputBackgroundColor.includes('#')) {
      return '#FFFFFF'
    }

    const backgroundColorRGB = hexToRgb(inputBackgroundColor)
    const backgroundColorLuminance = luminance(backgroundColorRGB.r, backgroundColorRGB.g, backgroundColorRGB.b);
    const colorLuminance = luminance(255, 255, 255);
    const ratio = colorLuminance > backgroundColorLuminance
      ? ((backgroundColorLuminance + 0.05) / (colorLuminance + 0.05))
      : ((colorLuminance + 0.05) / (backgroundColorLuminance + 0.05))
    return (ratio < 1 / 4.5) ? '#FFFFFF' : '#000000'
  }

  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

  const luminance = (r, g, b) => {
    var a = [r, g, b].map(function (v) {
      v /= 255;
      return v <= 0.03928
        ? v / 12.92
        : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
  }

  return <MUIChip
    className={classes.chip}
    clickable={clickable}
    label={label}
    onClick={() => onClick()}
    style={{
      color: determineColor(backgroundColor),
      backgroundColor: determineBackgroundColor(backgroundColor)
    }}
  />
}

Chip.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  clickable: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

Chip.defaultProps = {
  backgroundColor: 'primary',
  clickable: false,
  color: '#FFFFFF',
  label: 'Chip'
}

export default Chip
