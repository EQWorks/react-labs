import React from 'react'
import PropTypes from 'prop-types'

import InputBase from '@material-ui/core/InputBase'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import { fade, makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(0.5),
    },
    borderRadius: 4,
    border: '1px solid #e0e0e0',
    fontSize: 15,
    padding: '4px 6px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
  },
  label: {
    marginLeft: theme.spacing(1)
  },
  labelError: {
    marginLeft: theme.spacing(1),
    color: '#ea0000',
  },
  inputDefault: {
    boxShadow: `${fade('#0075ff', 0.25)} 0 0 0 0.2rem`,
    borderColor: '#0075ff',
  },
  inputError: {
    boxShadow: `${fade('#ea0000', 0.25)} 0 0 0 0.2rem`,
    borderColor: '#ea0000',
  },
}))

const TextField = ({
  inputProps,
  label,
  startAdornment,
  endAdornment,
  adornmentButton,
  adornmentOnClick,
  helperText,
  width,
  height,
  fullWidth,
  error,
  multiline,
  ...props
}) => {
  const classes = useStyles()
  const dimensions = { width, height: multiline ? 'auto' : height }
  const inp = {
    startAdornment: adornmentButton && startAdornment ?
      (<InputAdornment position="start">
        <IconButton onMouseDown={(e) => e.preventDefault()} disableRipple onClick={adornmentOnClick}>
          {startAdornment}
        </IconButton>
      </InputAdornment>)
      : (<InputAdornment position="start">{startAdornment}</InputAdornment>),
    endAdornment: adornmentButton && endAdornment ?
      (<InputAdornment position="end">
        <IconButton onMouseDown={(e) => e.preventDefault()} disableRipple onClick={adornmentOnClick}>
          {endAdornment}
        </IconButton>
      </InputAdornment>)
      : (<InputAdornment position="end">{endAdornment}</InputAdornment>),
  }

  return (
    <div>
      <InputLabel id='label' shrink className={error ? classes.labelError : classes.label}>{label}</InputLabel>
      <InputBase
        classes={{
          root: classes.root,
          focused: error ? classes.inputError : classes.inputDefault,
        }}
        style={fullWidth ? {} : dimensions}
        label={label}
        fullWidth={fullWidth}
        multiline={multiline}
        inputProps={inputProps}
        {...inp}
        {...props}
      />
      <FormHelperText id='helper-text' className={error ? classes.labelError : classes.label}>{helperText}</FormHelperText>
    </div>
  )
}

TextField.propTypes = {
  inputProps: PropTypes.object,
  label: PropTypes.string,
  startAdornment: PropTypes.any,
  endAdornment: PropTypes.any,
  adornmentButton: PropTypes.bool,
  adornmentOnClick: PropTypes.func,
  helperText: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  fullWidth: PropTypes.bool,
  error: PropTypes.bool,
  multiline: PropTypes.bool,
}

TextField.defaultProps = {
  inputProps: {},
  label: 'Label',
  startAdornment: '',
  endAdornment: '',
  adornmentButton: false,
  adornmentOnClick: null,
  helperText: '',
  width: '380px',
  height: '42px',
  fullWidth: false,
  error: false,
  multiline: false,
}

export default TextField
